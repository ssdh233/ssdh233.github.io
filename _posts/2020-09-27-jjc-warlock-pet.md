---
layout: post
title: "[镜像] [pvp] 竞技场中毁灭术士的宠物操作"
date: 2020-09-27
category: 中文
tags: [WOW]
---

本文首发于[NGA](https://ngabbs.com/read.php?&tid=23497811)。

大家好，我是在美服打竞技场的新手术士Alge，bfa第三个赛季回归之后玩到现在一年多，在各路队友的帮助下自己当初定下的目标都达成了。下个大版本可能要渐渐淡出这个游戏，打算趁着还有热情写点东西来回报一下社会，希望能让新的PVP志向的术士们少走一点弯路。

### 通用操作

首先所有宠物都会设置成被动状态<img class="normal" src="{{ site.url }}/assets/2020-09-27/passive.jpg">，因为协助状态<img class="normal" src="{{ site.url }}/assets/2020-09-27/assist.jpg">下宠物会根据术士改变自己攻击的目标。所有的宠物都有攻击!<img class="normal" src="{{ site.url }}/assets/2020-09-27/attack.jpg">，跟随<img class="normal" src="{{ site.url }}/assets/2020-09-27/follow.jpg">，移动<img class="normal" src="{{ site.url }}/assets/2020-09-27/moveto.jpg">三个基本操作。

攻击<img class="normal" src="{{ site.url }}/assets/2020-09-27/attack.jpg">可以让宠物去不断地攻击一个对手，直到对手吃了可能会破控的控制(晕，死缠之类不在此列)；如果对手被控制，宠物就会自动返回到跟随/移动(取决于攻击之前宠物的状态)。因此在目标吃控制之后，需要再按一次让宠物重新攻击对手。关于攻击有一个细节，如果对敌方目标按了攻击<img class="normal" src="{{ site.url }}/assets/2020-09-27/attack.jpg">，但是宠物还在路上，这时就算敌方目标被控制了，宠物也会去攻击被控制的目标。这时候一定要用下面的跟随<img class="normal" src="{{ site.url }}/assets/2020-09-27/follow.jpg">或者移动<img class="normal" src="{{ site.url }}/assets/2020-09-27/moveto.jpg">把宠物手动拉回来防止破控。

跟随<img class="normal" src="{{ site.url }}/assets/2020-09-27/follow.jpg">可以让宠物回到自己身边。主要用来拉回宠物。

移动<img class="normal" src="{{ site.url }}/assets/2020-09-27/moveto.jpg">可以让宠物移动到指定位置。这个技能也很重要，可以把宠物定在离自己有一定距离的位置，防止人宠被双控。还可以在对面潜行职业想要杀宠脱潜的时候，拉出来给一个生命通道等等。

本文会在下面详细阐述不同场景下如何使用上面的基本操作，这里只是想说这三个技能都很重要，所以推荐设置比较顺手的快捷键。(默认的ctrl+123就很好，不过我不太习惯用ctrl就改成了其他的)

### 地狱猎犬

<img class="normal" src="{{ site.url }}/assets/2020-09-27/felhunter.jpg">地狱猎犬有法术封锁<img class="normal" src="{{ site.url }}/assets/2020-09-27/spelllock.jpg">(打断，24s CD)和吞噬魔法<img class="normal" src="{{ site.url }}/assets/2020-09-27/devourmagic.jpg">(进攻驱散，15s CD)两个强力的远程技能，所以出场率非常高。一般情况下都可以带狗。

首先打断不建议使用系统自带的恶魔掌控<img class="normal" src="{{ site.url }}/assets/2020-09-27/commanddemon.jpg">技能，因为这个技能和宠物本身的打断是分开的，如果用了恶魔掌控<img class="normal" src="{{ site.url }}/assets/2020-09-27/commanddemon.jpg">但是对方不在狗的范围之内的话，会被判定用了这个技能但是实际并没有打断，这时候狗会走向对方到能打断的距离之后才去打断，如果对面使用omnibar的话就会很容易预判到这个断。而且如果中途打断被取消，恶魔掌控<img class="normal" src="{{ site.url }}/assets/2020-09-27/commanddemon.jpg">还是会进CD，这时候会出现狗明明有打断但是用不了的尴尬处境。解决这个问题的方法是所有的打断都使用`/click PetActionButton4`的宏(使用宠物技能栏的第四个技能)并且把打断拖到第四个上。如果要打断焦点目标或者竞技场框体目标，可以用下面的宏
```
#showtooltips Command Demon
/target [@arena1]
/click PetActionButton4
/targetlasttarget
```
arena1可以改成focus, arena2, arena3。<font style="color:red;">经#10朋友的提醒，恶魔掌控这个技能虽然有很多缺点，但是有一个优点是可以在上马的时候使用，在评级可能有妙用。</font>

地狱猎犬的打断<img class="normal" src="{{ site.url }}/assets/2020-09-27/spelllock.jpg">和其他职业的远程打断最不一样的是，这个打断是宠物的技能，所以目标一定要在宠物的视野/距离之内。一般情况下，让狗去自动攻击想打断的目标就可以了。不过有一些特殊情况：
1. 有上下层的地图，对方跳下去之后，狗会绕一个很大的圈才下来导致关键时间没有视野/距离
2. 狗被对面拉进柱子后定身
3. 面对贼法X时，法师会带狗的位置双龙息，或者牧师双恐惧/骑士双致盲接羊/霜环
4. 对方奶骑突然骑马冲上来制裁+忏悔我方治疗，狗的移动速度跟不上导致没有视野
等等。遇到这些情况就需要活用上面说的“移动”技能，把狗定在一个空旷的位置，保证离我方治疗有一定距离，同时可以打断到敌方的控制，并且随时准备移动。

另外，因为徽章可以同时解除人和宠物的控制，所以如果狗被对面放逐/恐惧/冰环等技能控制，我们可以选择交章打断关键的技能。如果用bigdebuffs这个插件，可以在宠物头像上看到宠物正在被什么控制。

吞噬魔法<img class="normal" src="{{ site.url }}/assets/2020-09-27/devourmagic.jpg">可以用来吃对面的重要魔法buff，比如骑士的神恩术和保护，萨满的免打断，牧师的全神盾，小德的激活荆棘术，法师的时光盾，冰火奥盾和燃烧冰脉奥强，术士的反射盾(还有下版本的黑魂..)，以及护徽饰品的盾等等。还有一个重要的用途是可以用来解我方队友的心控。另外，因为这个技能CD转的相对快并且有30码，可以用来保持对方进战斗，比如对面贼龟进柱子，我们把狗送过去按吞噬魔法<img class="normal" src="{{ site.url }}/assets/2020-09-27/devourmagic.jpg">的话，有视野的一瞬间就可以把贼保持在战斗，否则要等狗咬到对面的贼才会进战斗)

还有一个细节是，因为地狱猎犬的两个技能都是进攻技能，在释放成功之后地狱猎犬会去攻击使用技能的目标，不管对面有没有被控制。有的时候要注意用跟随<img class="normal" src="{{ site.url }}/assets/2020-09-27/follow.jpg">把宠物拉回来防止破控。(比如对面骑士神恩，狗吃魔法，但是同时我方盗贼同时盲了对面骑士，这时候如果能在狗追到对面骑士之前把狗拉回来就可以防止一个悲剧的发生)

狗的普通攻击还可以用来打图腾/灵能魔等等，特别是在没有视野或者火系被断的时候。(触须和战旗因为血量太多，所以如果用狗要多咬几口，一般一个燃烧就打完了)

### 小鬼

<img class="normal" src="{{ site.url }}/assets/2020-09-27/imp.jpg">小鬼只有一个比较重要的技能：烧灼驱魔<img class="normal" src="{{ site.url }}/assets/2020-09-27/singemagic.jpg">。这是一个防御驱散，15s CD，但是只能随机驱散掉一个魔法debuff。这个技能的最大用处是帮助自己的治疗队友解除控制(羊，冰冻陷阱，忏悔，日光时的缠绕，恐惧等)。一般打野猎X，贼法X之类的队伍可以考虑带小鬼驱散。

因为只能驱散一个debuff，所以对手会想方设法的在做控制的同时叠无用的debuff来防驱散。比较常见的有法师的羊+闪现冰环，野猎的缠绕+冰冻陷阱，惩戒骑和敏锐贼的魔法减速+控制等等，这时候就只有1/2(甚至1/3)的概率驱散到控制的debuff，一定要在驱散失败之后通知我方治疗，来判断是否要交其他技能。顺便制裁/沉默/恐惧/缠绕等等并不会清dot，所以要看好有没有其他的魔法debuff来决定是驱散这个控制，还是驱散之后可能到来的羊/冰冻陷阱。还有要注意对面制裁接羊，沉默接心灵炸弹的时候，要等只剩下一个debuff的时候再驱散。如果同时有两个长控制(比如羊+恐惧，满裁+羊)，那驱散了也没用。

小鬼如果被控制了是没法用技能的，所以一般会把小鬼放在离我方治疗稍微远一点的位置，防止一起吃恐惧/盲光/霜环。一般情况下跟随本人是没什么问题的，不过有对面贼法牧的牧师在法师羊的同时上来恐惧术士打另一个人的情况，这时候要把小鬼放的离本人也要远一点(但是要在我方治疗30码之内)。 ~~这个技能还有一个非常明显的缺点，那就是术士本人和小鬼都需要在被驱散者的视野/距离内，如果有任意一方卡住视角/被烟雾弹/超出范围等等，都无法使用。~~ <font style="color:red;">经#6朋友指出，如果直接使用小鬼技能(比如用`/click PetActionButton4`的宏)，就可以无视本人的视野/距离，只要小鬼有视野/距离就可以驱散！！！</font>

小鬼还有一个技能可以用来应急，逃跑<img class="normal" src="{{ site.url }}/assets/2020-09-27/flee.jpg">，这个技能可以让40码以内的小鬼随时回到术士身边。如果忘记调整小鬼的位置，或者之前没注意被恐飞了，可以先用这个技能把小鬼拉回来，然后驱散。但是注意这个技能在小鬼和术士之间没有视野的时候是无法使用的。

### 魅魔

<img class="normal" src="{{ site.url }}/assets/2020-09-27/succubus.jpg">魅魔有非常强力的控制技能魅惑<img class="normal" src="{{ site.url }}/assets/2020-09-27/seduction.jpg">(8s，30s CD)和一个可以自动挡的减速<img class="normal" src="{{ site.url }}/assets/2020-09-27/whipslash.jpg">，在特定条件下可以发挥出很大的作用。33面对双近战时，22面对近战+奶骑/奶僧/戒律时可以考虑带魅魔。

魅惑的好处是如果让魅魔一直跟着治疗的话，基本不需要对面治疗给视野就可以魅惑<img class="normal" src="{{ site.url }}/assets/2020-09-27/seduction.jpg">到。坏处也十分明显，因为需要引导，很容易被各种打断/晕等技能解掉(甚至还能被嘲讽解掉)。所以在33中如果用魅惑的话，一般是在魅惑的同时恐惧另一个dps，并且晕主目标(贼术，术元等都可以这么打)；或者提前对主目标挂浩劫，魅惑到同时双死缠，然后再晕+恐dps做三控。顺便本赛季的腐蚀出的眼睛也会断魅惑，有心的话留意一下对面的debuff可以少浪费一次递减。还有就是魅惑结束之后魅魔会走回来，需要再按一次攻击让魅魔重新跟上目标。

和地狱猎犬的打断一样，用恶魔掌控的话这个技能也会有无数个bug，所以建议用`/click PetActionButton4`的宏。
```
#showtooltips Command Demon
/petpassive
/target [@arena1]
/click PetActionButton4
/targetlasttarget
```
这里的`/petpassive`的用处是再次按这个宏会取消当前读条重新读，可以用来骗牧师的灭。不过注意读成功了之后不要再按，否则会取消引导。(如果不需要的话可以把`/petpassive`去掉)

减速<img class="normal" src="{{ site.url }}/assets/2020-09-27/whipslash.jpg">我一般是开自动挡，让魅魔一直跟着治疗。竞技场内还没有用过手动减速。

### 虚空行者

<img class="normal" src="{{ site.url }}/assets/2020-09-27/voidwalker.jpg">虚空行者有一个嘲讽<img class="normal" src="{{ site.url }}/assets/2020-09-27/suffering.jpg">和aoe攻击<img class="normal" src="{{ site.url }}/assets/2020-09-27/consumingshadows.jpg">。嘲讽没有用过，aoe攻击<img class="normal" src="{{ site.url }}/assets/2020-09-27/consumingshadows.jpg">也只有在对面dk出僵尸的时候用过。如果对目标释放群体aoe的话，胖子会走过去攻击那个目标，所以可以用下面的宏来让胖子一直在自己旁边放aoe，不过需要关闭自动挡去手动点。

```
/cast [@player] Consuming shadows
```

### 地狱火
<img class="normal" src="{{ site.url }}/assets/2020-09-27/infernal.jpg">额外说一下地狱火。因为地狱火会每秒对自身周围的对手造成一个aoe伤害，所以会破控。放了地狱火之后最好要通知一下队友。有的人也会故意把地狱火拉到被控制的治疗身边解控，在关键时刻可能要用下面的宏取消地狱火去做控制/防止破控。顺便即使取消地狱火不会影响统御的持续时间。
```
/click TotemFrameTotem1 RightButton
/click TotemFrameTotem2 RightButton
/click TotemFrameTotem3 RightButton
/click TotemFrameTotem4 RightButton
```

### 宏

首先十分抱歉，因为lz在美服玩，所以宏里用的技能名字都是英文。没记错的话国服客户端也是可以通用的；如果不是也没关系，这里主要是想分享一下做宏的思路，并不是说每个人都要用这个宏才能打，各位可以根据自己的习惯来定制自己的宏。

为了节省按键，一般会想把不同的宠物的技能放到同一个按键上，比如法术封锁(地狱猎犬)和魅惑(魅魔)可以是一个键，吞噬魔法(地狱猎犬)和逃跑(小鬼)和吞噬之影(虚空行者)可以是一个键，等等。下面分享一下把不同技能集合到一个按键的方法。

首先是上面说的这个代替恶魔掌控<img class="normal" src="{{ site.url }}/assets/2020-09-27/commanddemon.jpg">的宏，只要把法术封锁，魅惑和烧灼驱魔都放在宠物技能栏的第四个键位，就可以一键多用。如果想让小鬼驱散指定队友的话，还可以用`/target [pet:imp, @队友名字]`的语句来让这个宏在带小鬼的时候指定不同的目标。
```
(当前目标)
#showtooltips Command Demon
/petpassive
/click PetActionButton4

(焦点或者竞技场框体)
#showtooltips Command Demon
/petpassive
/target [@arena1]
/target [pet:imp, @队友名字]
/click PetActionButton4
/targetlasttarget
```

<font style="color:red;">补充：关于法术封锁和魅惑，似乎直接写`/cast [pet: succubus] Seduction`， `/cast [pet: felhunter] Spell Lock`也可以使用宠物的技能(而不是恶魔掌控的那个技能)。这样不用`/click PetActionButton4`这么麻烦，像下面那个宏一样把技能塞到一起也是可以实现相同效果。之前我记得这样写会用到恶魔掌控的那个技能导致引发恶魔掌控相关的各种bug，可能是记错了。</font>


然后介绍一下正常情况下如何在一个宏根据宠物设定不同技能，比如我有一个把吞噬魔法(地狱猎犬)，逃跑(小鬼)，减速(魅魔)，吞噬之影(虚空行者)放在一起的宏。
```
#showtooltips
/cast [pet: succubus] Whiplash(Special Ability)
/cast [pet: felhunter] Devour Magic(Special Ability)
/cast [pet: imp] Flee
/cast [pet: voidwalker, @player] Consuming shadows
```
可以看到，其实就是使用[pet: imp]这种条件判断来完成在携带不同宠物的时候放不同的技能。如果想对焦点使用，可以`/cast [pet: felhunter, @focus] Devour Magic(Special Ability)`这样来写。

### 最后

术士的宠物操作比较繁琐，但是很多时候打断/驱散又是决定胜负的关键。这个赛季我打了好几千场33，还是会经常出现狗打断不到想打断的目标( 其实更多的是明明能断到但是没看到 )，小鬼驱不到队友等尴尬情况。希望这篇文章可以帮助各位术士来驯服不听话的宠物。另外lz实力有限，难免有错误或者疏忽的地方，欢迎随时指出。
