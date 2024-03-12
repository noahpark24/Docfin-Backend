import { Test, TestingModule } from '@nestjs/testing';
import { IncomesServicesService } from './incomes-services.service';

describe('IncomesServicesService', () => {
  let service: IncomesServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IncomesServicesService],
    }).compile();

    service = module.get<IncomesServicesService>(IncomesServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
