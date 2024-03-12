import { Test, TestingModule } from '@nestjs/testing';
import { MovementServicesService } from './movement-services.service';

describe('MovementServicesService', () => {
  let service: MovementServicesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MovementServicesService],
    }).compile();

    service = module.get<MovementServicesService>(MovementServicesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
