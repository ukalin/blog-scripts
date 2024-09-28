import { hightlight } from './mods/hightlight.js';
import { chineseDisplay } from './mods/chinese-display.js';
import { randomPost } from './mods/random-post.js';
import { login } from './mods/login/login.js';
import { addCssClass } from './mods/add-css-class.js';

const mods = [hightlight, chineseDisplay, randomPost, login, addCssClass];

const showMainContent = () => {
    document.querySelector('main').style.visibility = 'visible'
}

window.addEventListener('DOMContentLoaded', function () {
    // 页面加载完成后执行
    const url = new URL(window.location.href);
    const path = url.pathname;

    mods.forEach(mod => {
        if (mod.skipFirstPage && path === "/") {
            // 跳过首页执行
            return;
        }

        try {
            mod.run(); 
        } catch (error) {
            console.error(`mod运行异常，name: ${mod.name}, error: ${error}`)
        }
    })

    showMainContent();
});