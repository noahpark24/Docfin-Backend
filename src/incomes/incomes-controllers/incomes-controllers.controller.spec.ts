import { Test, TestingModule } from '@nestjs/testing';
import { IncomesControllersController } from './incomes-controllers.controller';

describe('IncomesControllersController', () => {
  let controller: IncomesControllersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IncomesControllersController],
    }).compile();

    controller = module.get<IncomesControllersController>(IncomesControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
