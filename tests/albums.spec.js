import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import sinonStubPromise from 'sinon-stub-promise';

import { 
    getAlbum,
    getAlbumTracks
} from '../src/albums';
import { API_URL } from '../src/config';


chai.use(sinonChai);
sinonStubPromise(sinon);

global.fetch = require('node-fetch');

describe('Album', () => {
    let stubedFetch;
    let promise;

    beforeEach(() => {
        stubedFetch = sinon.stub(global, 'fetch');
        promise = stubedFetch.returnsPromise();
    });

    afterEach(() => {
        stubedFetch.restore();
    });

    describe('smoke tests', () => {
        it('should have getAlbum methos', () => {
            expect(getAlbum).to.exist;
        });

        it('should have getAlbumTracks method', () => {
            expect(getAlbumTracks).to.exist;
        });
    });

    describe('getAlbum', () => {
        
        it('should call fetch method', () => {
            expect()
        });

        it('should call fetch method', () => {
            const album = getAlbum();
            expect(stubedFetch).to.have.been.calledOnce;
        });

        it('should call fetch with correct URL', () => {
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(stubedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTy`);

            const album2 = getAlbum('4aawyAB9vmqN3uQ7FjRGTk');
            expect(stubedFetch).to.have.been
                .calledWith(`${API_URL}/albums/4aawyAB9vmqN3uQ7FjRGTk`);
        });

        it('should return correct data from Promise', () => {
            promise.resolves({album: 'name'});
            const album = getAlbum('4aawyAB9vmqN3uQ7FjRGTy');
            expect(album.resolveValue).to.be.eql({album: 'name'});
        });

    });
});