import { Test, TestingModule } from '@nestjs/testing';
import { SpendsControllersController } from './spends-controllers.controller';

describe('SpendsControllersController', () => {
  let controller: SpendsControllersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SpendsControllersController],
    }).compile();

    controller = module.get<SpendsControllersController>(SpendsControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
