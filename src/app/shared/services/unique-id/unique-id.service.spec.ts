import { UniqueIdService } from "./unique-id.service";

describe('UniqueIdService', () => {
    it('generateUniqueIdWithPrefix', () => {
        const service = new UniqueIdService();
        const id = service.generateUniqueIdWithPrefix('app');

        expect(id).toContain('app-');
    });
});

