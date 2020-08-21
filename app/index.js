import SceneCreator from './scene_creator';
import GameInit from './game_init';
import InputControl from './input_control';
import GameController from './game_controller';
import Images from './images';

const start = async () => {
    SceneCreator.stats();

    new GameInit();
    window.ctx = document.getElementById('gameCanvas').getContext('2d');

    const images = new Images();
    await images.load();
    window.gameImages = images.images();

    const gameController = new GameController(new InputControl());
    SceneCreator.create(gameController);
};

start();
