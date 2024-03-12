import { Test, TestingModule } from '@nestjs/testing';
import { SpendsServicesService } from './spends-services.service';

describe('SpendsServicesService', () => {
  let service: SpendsServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SpendsServicesService],
    }).compile();

    service = module.get<SpendsServicesService>(SpendsServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
