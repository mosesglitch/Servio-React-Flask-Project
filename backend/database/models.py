import os
from io import BytesIO
from sqlalchemy import Column, String, Integer
from flask_sqlalchemy import SQLAlchemy
import json

# database_filename = "database.db"
# project_dir = os.path.dirname(os.path.abspath(__file__))
# database_path = "sqlite:///{}".format(os.path.join(project_dir, database_filename))
database_name = 'serviojs'
database_path = 'postgresql://{}:{}@{}/{}'.format('paps','chapo','localhost:5432', database_name)

db = SQLAlchemy()

'''
setup_db(app)
    binds a flask application and a SQLAlchemy service
'''


def setup_db(app):
    app.config["SQLALCHEMY_DATABASE_URI"] = database_path
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    db.app = app
    db.init_app(app)
    


'''
db_drop_and_create_all()
    drops the database tables and starts fresh
    can be used to initialize a clean database
    !!NOTE you can change the database_filename variable to have multiple verisons of a database
'''


def db_drop_and_create_all():
    db.drop_all()
    db.create_all()
    # add one demo row which is helping in POSTMAN test
    server = Service_info(
        # title='water',
        # recipe='[{"name": "water", "color": "blue", "parts": 1}]',
        # String Title
        name   = 'Kimani',
        # the ingredients blob - this stores a lazy json blob
        # the required datatype is [{'color': string, 'name':string, 'parts':number}]
        location = 'Lucky Summer',

        about = 'Glow Everyday',

        skill = 'Makeup artist',

        availability = 'Available',

    )
    masseuse = Service_info(
        name   = 'Ganta',
        location = 'Westlands',
        about = 'Relax',
        skill = 'Masseuse',
        availability = 'Closed',
    )
    server.insert()
    masseuse.insert()
# ROUTES

'''
Drink
a persistent drink entity, extends the base SQLAlchemy Model
'''


class Service_info(db.Model):
    # Autoincrementing, unique primary key
    id = Column(Integer().with_variant(Integer, "sqlite"), primary_key=True)
    # String Title
    name   = Column(String(80), unique=True)
    # the ingredients blob - this stores a lazy json blob
    # the required datatype is [{'color': string, 'name':string, 'parts':number}]
    location = Column(String(80))

    about = Column(String(180), nullable=True)

    skill = Column(String(180),nullable=False)

    availability = Column(String(50),nullable=True)
    
    image_link= Column(String(100),nullable=True)

    email= Column(String(100),nullable=True)

    phone= Column(Integer)

    facebook = Column(String(50),nullable=True)

    twitter = Column(String(50),nullable=True)
    '''
    short()
        short form representation of the Drink model
    '''

    def short(self):
        # short_recipe = [{'color': r['color'], 'parts': r['parts']} for r in json.loads(self.recipe)]
        return {
            'id': self.id,
            'name': self.name,
            'location': self.location,
            "about":self.location,
            "skill":self.skill,
            'availability':self.availability
        }

    '''
    long()
        long form representation of the Drink model
    '''

    def long(self):
        return {
            'id': self.id,
            'name': self.name,
            'location': self.location,
            "about":self.location,
            "skill":self.skill,
            'availability':self.availability,
            "image_link":self.image_link,
            "email":self.email,
            "phone":self.phone,
            "facebook":self.facebook,
            "twitter":self.twitter
            # 'recipe': json.loads(self.recipe)
        }

    '''
    insert()
        inserts a new model into a database
        the model must have a unique name
        the model must have a unique id or null id
        EXAMPLE
            drink = Drink(title=req_title, recipe=req_recipe)
            drink.insert()
    '''

    def insert(self):
        db.session.add(self)
        db.session.commit()

    '''
    delete()
        deletes a new model into a database
        the model must exist in the database
        EXAMPLE
            drink = Drink(title=req_title, recipe=req_recipe)
            drink.delete()
    '''

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    '''
    update()
        updates a new model into a database
        the model must exist in the database
        EXAMPLE
            drink = Drink.query.filter(Drink.id == id).one_or_none()
            drink.title = 'Black Coffee'
            drink.update()
    '''

    def update(self):
        db.session.commit()

    def __repr__(self):
        return json.dumps(self.short())