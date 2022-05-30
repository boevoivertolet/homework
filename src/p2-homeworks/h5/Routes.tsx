import React from 'react'
import { Routes ,Route } from 'react-router-dom';
import Error404 from '../h5-rrd-v6/pages/Error404';
import PreJunior from '../h5-rrd-v6/pages/PreJunior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routes() {
    return (
        <div>
            Switch выбирает первый подходящий роут
            <Routes >

            в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR
            exact нужен чтоб указать полное совподение (что после '/' ничего не будет)
            <Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>

            <Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>
                // add routes

            у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу
            <Route render={() => <Error404/>}/>

            </Routes >
        </div>
    )
}

export default Routes
