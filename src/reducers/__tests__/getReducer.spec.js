import { getReducer } from '../getReducer';
import * as types from '../../actions/types';

describe('loadGame reducer', () => {
    it('should return the initial state', () => {
        expect(getReducer(undefined, {})).toEqual(
          {
            games: [],
            categories: []
          }
        );
    });
});