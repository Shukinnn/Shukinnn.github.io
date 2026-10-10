const details = {
  island: { label: '01 / PRODUCT CONCEPT', title: '浮岛 / 为专注留一座小岛', content: '<p>如果打开一个工具，不是为了处理更多事情，而是为了暂时只做一件事呢？浮岛从这个问题开始。</p><h3>把注意力还给当下</h3><p>这个产品概念用一段 25 分钟的时间，划出一块不被打扰的空间。没有排行榜，没有连续打卡提醒。只有一个清晰的计时器，和一个随时可以重新开始的按钮。</p><h3>安静，也是一种设计选择</h3><p>低饱和的苔绿色、纸张般的背景与宽松的间距，让界面尽量退到后面。作品探索的是一种更轻的数字生活，而不是追求效率的另一场竞赛。</p><p>项目形式：产品概念、界面设计与视觉探索。当前展示为静态设计稿。</p>' },
  form: { label: '02 / VISUAL EXPERIMENT', title: '形与序 / 几何之间的对话', content: '<p>一个圆、一块方形、一道圆角。最简单的几何形，也能表达不同的性格。</p><h3>限制是一种起点</h3><p>这个实验只使用四种颜色和三种基本形状。每次调整一个变量：大小、位置，或方向。观察画面如何从稳定走向活泼，又如何在不对称中找到平衡。</p><h3>让视觉保留一点玩心</h3><p>蓝色托住橙色，米白色留出呼吸。它不需要解释一个复杂的概念，只邀请你停留几秒，感受形状相遇时产生的节奏。</p><p>项目形式：原创 CSS 几何构图与悬停交互实验。</p>' },
  field: { label: '03 / DIGITAL JOURNAL', title: '山野手记 / 走慢一点，看见更多', content: '<p>路边一棵不认识的树，转角一家刚开门的旧书店，傍晚落在墙上的一束光。散步没有目的地，但可以留下线索。</p><h3>为微小的发现做一本手记</h3><p>山野手记是一份数字日记的概念：每次只收藏一个片刻，写几句话，不急着分类，也不必发布给谁看。</p><h3>从纸页得到的灵感</h3><p>深绿、米白与等高线构成视觉语言。页面像一张随身携带的地图，让屏幕也能留下户外的呼吸感。</p><p>项目形式：网页视觉概念。示例不收集位置或个人数据。</p>' },
  'note-one': { label: '设计思考 / 2026.09.28', title: '好的设计，也许是少做一点。', content: '<p>整理一个页面的时候，最容易做的事情是往里面加东西。一段解释、一个图标、一种新的强调色。每一项单独看似乎都有理由，放在一起却让原本简单的事情变得费力。</p><h3>先问：它必须在这里吗？</h3><p>试着拿掉一个元素，再重新看一遍页面。用户是否依然知道下一步该做什么？如果答案是肯定的，那片空白也许比原来的装饰更有价值。</p><p>留白并不是没有设计。它是对信息优先级的一次明确表达：这一刻，请先看这里。</p><h3>少一点，但把留下的做好</h3><p>把文字写得更清楚，把按钮放到更自然的位置，让操作后的反馈更及时。设计的细节，常常存在于这些不起眼的地方。</p><p>下一次遇到拥挤的界面，不妨先试试减法。</p>' },
  'note-two': { label: '创造日常 / 2026.09.12', title: '把「有空再做」变成今天的小实验。', content: '<p>灵感清单总是越写越长。想做一个网站，想写一个小工具，想学一种新的表现方式。它们被安放在「有空再说」的文件夹里，等待一个不会自动出现的完整下午。</p><h3>把开始缩小到二十分钟</h3><p>不要一开始就定义完整的产品。今天只做一个标题、一种配色，或者让一个按钮真的有反应。小到可以完成，才有继续的动力。</p><p>一个不完美但能打开的页面，比脑海里无限精致的方案多了一件重要的东西：反馈。</p><h3>允许第一版有点粗糙</h3><p>创造不是一次交卷，而是一次又一次修改。先让想法有一个形状，再慢慢靠近喜欢的样子。</p>' },
  'note-three': { label: '生活观察 / 2026.08.30', title: '散步，是给大脑的一次重启。', content: '<p>遇到一个反复想不通的问题时，我喜欢暂时合上电脑，出门走一小圈。不带着解决问题的任务，只看看附近有什么变化。</p><h3>换一种输入</h3><p>屏幕里的信息有明确的边界，街道上的信息却是松散的：招牌的字体、树叶的影子、交错的脚步声。它们不会直接给出答案，却能让注意力不再卡在同一个地方。</p><p>有时候灵感来自一家店的窗格，有时候来自路口等红灯时的一阵风。更多时候，只是回到桌前，发现那个问题已经没有那么难了。</p><h3>不必走得很远</h3><p>绕过熟悉的街区，选一条没走过的小路。把手机放进口袋里，给自己留一点无事发生的时间。</p>' }
};

const dialog = document.querySelector('#detail-dialog');
document.querySelectorAll('[data-detail]').forEach(button => {
  button.addEventListener('click', () => {
    const item = details[button.dataset.detail];
    document.querySelector('#dialog-label').textContent = item.label;
    document.querySelector('#dialog-title').textContent = item.title;
    document.querySelector('#dialog-content').innerHTML = item.content;
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
  });
});
document.querySelector('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('close', () => document.body.classList.remove('dialog-open'));
dialog.addEventListener('click', event => {
  if (event.target !== dialog) return;
  const rect = dialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
});
document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => {
      const active = item === button;
      item.classList.toggle('active', active);
      item.setAttribute('aria-pressed', String(active));
    });
    document.querySelectorAll('[data-category]').forEach(project => {
      project.hidden = button.dataset.filter !== 'all' && project.dataset.category !== button.dataset.filter;
    });
  });
});
