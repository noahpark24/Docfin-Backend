import { Test, TestingModule } from '@nestjs/testing';
import { MovementControllersController } from './movement-controllers.controller';

describe('MovementControllersController', () => {
  let controller: MovementControllersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MovementControllersController],
    }).compile();

    controller = module.get<MovementControllersController>(MovementControllersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
