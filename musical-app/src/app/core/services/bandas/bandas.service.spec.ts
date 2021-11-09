import { TestBed } from '@angular/core/testing';

import { BandasService } from './bandas.service';

describe('BandasService', () => {
    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const service: BandasService = TestBed.get(BandasService);
        expect(service).toBeTruthy();
    });
});