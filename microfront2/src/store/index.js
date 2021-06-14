import {createStore} from 'redux';
import reducers from './reducers';

/**
 * +--------+           +---------+           +---------+
 * | Action | =======>  | Reducer | =======>  |  Store  |
 * +--------+           +---------+           +---------+
 *                                                 ^
 *                                                 |
 *                                            +---------+
 *                                            |    UI   |
 * by Rondinelil Morais                       +---------+
 *
 * -------
 * No Código fica:
 * -------
 * dispatch(action()) => redux => reducer => store
 *
 * `action()` tem que ser funções puras que serão passadas ao redux.
 * `reducer` deve combinar todos os reducers da aplicação. Cada redurce deve
 * gerenciar a alteração dos dados.
 *
 */
export default createStore(reducers);
