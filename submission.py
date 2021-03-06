# Imports.

import pandas as pd
from sklearn.ensemble import GradientBoostingRegressor, ExtraTreesRegressor
from sklearn.ensemble import RandomForestRegressor
import csv
import numpy as np
import sklearn.preprocessing
import datetime
from sklearn import linear_model
import utils

CATEGORICAL_COLUMNS = set(['City', 'City Group', 'Type'])
EXCLUDE_COLUMNS = set(['revenue', 'Start'])
NUMBER_JOBS = 3
STD_SCALER = sklearn.preprocessing.StandardScaler()
WEAK_LEARNERS = 40
LEARNING_RATE = 0.08
COUNT = 0

conv = {'revenue': utils.f}
fd = open('text.txt', 'w')

for i in xrange(1, 22):
    conv['P' + str(i)] = utils.f

df = pd.read_csv('train.csv', sep=',', dtype='unicode', converters=conv)

# remove unecesary columns.
df = df.drop('Id', 1)
df = df.drop('Open Date', 1)

ddf = pd.read_csv('train.csv', sep=',', dtype='unicode', converters=conv)

# remove unecesary columns.
ddf = ddf.drop('Id', 1)
ddf = ddf.drop('Open Date', 1)


def train_model(df):
    """
    Trains and returns model
    """
    columns = list(df.columns.values)
    # for c in columns:
    #     fd.write(c)
    for column in columns:
        if column == 'City':
            df[column] = df[column].map(lambda x: utils.CITY_DICT[x])
        elif column == 'City Group':
            df[column] = df[column].map(lambda x: utils.GROUP_DICT[x])
        elif column == 'Type':
            df[column] = df[column].map(lambda x: utils.TYPE_DICT[x])
        elif column not in EXCLUDE_COLUMNS:
            df[column] = STD_SCALER.fit_transform(df[column])
    training = df.drop('revenue', 1)
    target = df['revenue']
    # print df.columns.tolist()

    mod = GradientBoostingRegressor(n_estimators=WEAK_LEARNERS,learning_rate=LEARNING_RATE, max_depth=1, random_state=0, loss='huber')
    #mod1=RandomForestRegressor(n_estimators=10,oob_score=True, max_depth=40, random_state=48)

    return mod.fit(training, target)
# ***************************************************************************************************************************
def train_model_rf(df):
    """
    Trains and returns model
    """
    columns = list(df.columns.values)
    # for c in columns:
    #     fd.write(c)
    for column in columns:
        if column == 'City':
            df[column] = df[column].map(lambda x: utils.CITY_DICT[x])
        elif column == 'City Group':
            df[column] = df[column].map(lambda x: utils.GROUP_DICT[x])
        elif column == 'Type':
            df[column] = df[column].map(lambda x: utils.TYPE_DICT[x])
        elif column not in EXCLUDE_COLUMNS:
            df[column] = STD_SCALER.fit_transform(df[column])
    training = df.drop('revenue', 1)
    target = df['revenue']
    # print df.columns.tolist()

    #mod = GradientBoostingRegressor(n_estimators=WEAK_LEARNERS,learning_rate=LEARNING_RATE, max_depth=1, random_state=0, loss='huber')
    mod=RandomForestRegressor(n_estimators=10,oob_score=True, max_depth=40, random_state=48)

    return mod.fit(training, target)

def execute(forest):
    test = pd.read_csv('test.csv', sep=",", dtype="unicode")
    test = test.drop('Id', 1)
    test = test.drop('Open Date', 1)
    columns = list(test.columns.values)
    #print columns
    for column in columns:
        if column == 'City':
            test[column] = test[column].map(lambda x: utils.city_conv(x))
        elif column == 'City Group':
            test[column] = test[column].map(lambda x: utils.group_conv(x))
        elif column == 'Type':
            test[column] = test[column].map(lambda x: utils.type_conv(x))
        elif column not in EXCLUDE_COLUMNS:
            test[column] = STD_SCALER.fit_transform(test[column])

    test_matrix = test.as_matrix()

    ctr = 0
    global COUNT
    if COUNT==0:
        out = open('submit.csv', 'w')
        COUNT=1
    else:
        out = open('submit_rf.csv', 'w')
    #out.write('Id' + "," + "Prediction" + "\n")
    for row in test_matrix:
        out.write(str(ctr) + "," +str(forest.predict(row)[0])+"\n")

        ctr += 1
    out.close()


est = train_model(df)
execute(est)
rf = train_model_rf(ddf)
execute(rf)
