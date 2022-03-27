import wiseMan from '../img/wise-man.png';
import fighter from '../img/fighter.png';
import archer from '../img/archer.png';
import prince from '../img/prince.png';
import jockey from '../img/jockey.png';
import warrior from '../img/warrior.png';
import helgy from '../img/helgy.png';

export const figures = [
    {
        icon: wiseMan,
        alt: 'wise man',
        name: 'Волхв: ',
        description: [
            {
                text: 'может ходить на любое соседнее поле на 1 клетку, если она не находится под ударом фигур противника. Волхв может образовать башню, если она не находится под боем.',
                className: ''
            }
        ]
    },
    {
        icon: fighter,
        alt: 'fighter',
        name: 'Ратоборец: ',
        description: [
            {
                text: 'ходит на любое поле по горизонтали и вертикали, на которых он стоит. «Перепрыгивать» через таврели не может, за исключением рокировки. Если на пути его движения расположена своя или чужая таврель, он ставится сверху, образуя башню, которая будет двигаться по правилам верхней таврели.',
                className: ''
            }
        ]
    },
    {
        icon: archer,
        alt: 'archer',
        name: 'Лучник: ',
        description: [
            {
                text: 'ходит на любое доступное поле по диагонали,' ,
                className: ''
            },
            {
                text: 'на которой он стоит.',
                className: ''
            }
        ]
    },
    {
        icon: prince,
        alt: 'prince',
        name: 'Князь: ',
        description: [
            {
                text: 'ходит на любое поле по вертикали, горизонтали или диагонали, на которых он стоит. Князь перемещается как лучник и ратоборец. Одна из самых сильных фигур, уступает только хелги.',
                className: ''
            }
        ]
    },
    {
        icon: jockey,
        alt: 'jockey',
        name: 'Всадник: ',
        description: [
            {
                text: 'особенная фигура на шахматной доске. Если остальные фигуры ходят по прямым или косым линиям, то всадник перемещается по ломаной линии: на два поля прямо и на одно поле наискосок (разумеется, за один ход). Кроме того, всадник - таврель, которая может перескакивать через свои и чужие фигуры. Свой ход всадник может делать в любом направлении, и всегда этот ход напоминает букву «Г». В зависимости от того, в каком направлении движется всадник, и буква «Г» может выглядеть по разному.',
                className: ''
            }
        ]
    },
    {
        icon: warrior,
        alt: 'warrior',
        name: 'Ратник: ',
        description: [
            {
                text: 'ходит вперед на поле, расположенное непосредственно перед ним на той же самой вертикали и не занятое таврелью противника. С исходной позиции ратник может продвинуться на 2 поля по той же самой вертикали, если оба эти поля свободны от фигур противника. Если на этих полях находятся свои таврели, то ратник может образовать с ними башню, занимая верхнее положение.',
                className: ''
            },
            {
                text: 'Ратник, который уже ходил и в процессе игры вновь попал на исходное поле на 2-й и 7-й горизонталях соответственно для белых и черных, теряет право продвижения вперед сразу на 2 поля.',
                className: 'margin-bottom'
            },
            {
                text: 'Ратник ходит на поле, занимаемое таврелью противника, которое расположено по диагонали на одну клетку вперед, образуя новую башню.',
                className: ''
            },
            {
                text: 'Когда ратник достигает самой дальней горизонтали от своей исходной позиции, он переворачивается и превращается в ту таврель, перед которой он стоял в исходной позиции и чей символ изображен на его нижней и боковой поверхности. Это превращение является частью того же хода.',
                className: 'margin-bottom'
            },
            {
                text: 'Если на превращенного ратника ставится своя таврель или таврель противника, он переворачивается и становится обычным ратником.',
                className: ''
            },
            {
                text: 'Ратник, стоящий в исходном положении перед волхвом, при описанных выше условиях превращается в хелги.',
                className: ''
            }
        ]
    },
    {
        icon: helgy,
        alt: 'helgy',
        name: 'Хелги: ',
        description: [
            {
                text: 'ходит вперед на поле, расположенное непосредственно перед ним на той же самой вертикали и не занятое таврелью противника. С исходной позиции ратник может продвинуться на 2 поля по той же самой вертикали, если оба эти поля свободны от фигур противника. Если на этих полях находятся свои таврели, то ратник может образовать с ними башню, занимая верхнее положение.',
                className: ''
            },
            {
                text: 'Ратник, который уже ходил и в процессе игры вновь попал на исходное поле на 2-й и 7-й горизонталях соответственно для белых и черных, теряет право продвижения вперед сразу на 2 поля.',
                className: ''
            }
        ]
    }
];

export const gameRules = [
    {
        text: 'Партия в русские шахматы играется между двумя партнерами, по очереди передвигающими фигуры (таврели) на квадратной клетчатой доске.',
        className: ''
    },
    {
        text: 'Шахматная доска состоит из 64-х клеток, 8-ми горизонталей и 8-ми вертикалей. На шахматной доске также присутствуют черные и белые диагонали.',
        className: 'margin-bottom'
    },
    {
        text: 'У каждого игрока имеются по 16 фигур (таврелей).',
        className: ''
    },
    {
        text: 'По углам доски ставятся ратоборцы. Возле них располагаются всадники, затем лучники. В центре на поле своего цвета ставится князь, рядом волхв. Перед фигурами располагается ряд из 8 ратников.',
        className: ''
    },
    {
        text: 'Каждый ратник в начале партии должен быть установлен перед той таврелью, чей символ изображен на нижней и боковой поверхности таврели ратника. Перед волхвом устанавливается ратник с символом хелги. Начинают игру белые таврели.',
        className: 'margin-bottom'
    },
    {
        text: 'Ходом считается передвижение таврели (одной или в составе башни по правилам верхней таврели) с одного поля на другое. Ни одна из таврелей, за исключением хелги (когда фигура ходит как всадник), волхва, всадника и ратоборца при рокировке, не может перемещаться через поле, занятое таврелью противника. Ни одна из таврелей в процессе партии не снимается с игровой доски.',
        className: 'margin-bottom'
    },
    {
        text: 'Все таврели могут при своем ходе ставиться на другие таврели (свои или партнера), образуя башни.',
        className: ''
    },
    {
        text: 'Исключение: на волхва не может ставиться ни одна таврель.',
        className: 'bold'
    },
    {
        text: 'Башня может быть перемещена как полностью, так и разделяясь на две части. При этом ее нижняя часть остается на прежнем поле и действие этой части начинается немедленно (по правилам хода верхней таврели).',
        className: ''
    }
]; 

export const otherRules = [
    {
        title: 'Рокировка:',
        description: [
            {
                text: 'Один раз в игру можно сделать рокировку. Рокировка может быть короткой и длинной. Делается следующим образом: волхв перемещается по направлению к ратоборцу через одну клетку, а ратоборец переносится через него и ставится рядом. Рокировка становится невозможной, если волхв и ратоборец, которыми делается рокировка, уже ходили.',
                className: 'margin-bottom'
            },
            {
                text: 'Рокировка временно невозможна, если:',
                className: ''
            },
            {
                text: '- поле, на котором стоит волхв, или поле, которое он должен пересечь, или поле, которое он должен занять, атаковано одной из таврелей противника;',
                className: ''
            },
            {
                text: '- между волхвом и ратоборцем, с которым производится рокировка, на одной горизонтали находится какая-либо таврель.',
                className: ''
            }
        ]
    },
    {
        title: 'Взятие на проходе:',
        description: [
            {
                text: 'Ратник, сделавший ход через поле, находящееся под атакой ратника противника, может быть «взят в плен». Противник образует башню, как если бы ход первого ратника был только на одно поле.',
                className: ''
            }
        ]
    },
    {
        title: 'Шах:',
        description: [
            {
                text: 'Если любая таврель – князь, ратоборец, лучник, всадник, ратник или хелги атакует волхва, то такое нападение называется шахом. От шаха нужно обязательно защититься.',
                className: 'margin-bottom'
            },
            {
                text: 'Есть 3 способа защиты: можно отойти волхвом, пленить нападающую таврель или же поставить между ней и волхвом другую таврель.',
                className: ''
            }
        ]
    },
    {
        title: 'Мат:',
        description: [
            {
                text: 'Если ни один из способов защиты от шаха выполнить нельзя (увести волхва, пленить нападающую таврель или заслонить волхва другой таврелью), то получается мат волхву. Партия прекращается, и игрок, получивший мат волхву, - проигрывает. Партия считается выигранной, если удается объявить мат волхву соперника, или если соперник сдается сам.',
                className: ''
            }
        ]
    },
    {
        title: 'Ничья:',
        description: [
            {
                text: 'Партия может закончиться ничьей в трех случаях:',
                className: 'margin-bottom'
            },
            {
                text: 'при взаимном согласии соперников;',
                className: 'list'
            },
            {
                text: 'если при своей очереди хода играющий не может сделать никакого хода, при этот волхв не находится под шахом. Такое положение называется пат;',
                className: 'list'
            },
            {
                text: 'по требованию одного из игроков, у которого одна и та же позиция возникает три раза (необязательно подряд), возможности перемещения таврелей при этом не изменились. Разновидность такой ничьей – вечный шах, когда одна из сторон непрерывно нападает на волхва соперника, и последний не может укрыться от шахов.',
                className: 'list'
            }
        ]
    },
    {
        title: 'Мат:',
        description: [
            {
                text: 'Чтобы записать отдельный ход или всю партию, применяется следующая система: горизонтальные ряды, начиная от играющего белыми таврелями, обозначают цифрами от 1 до 8, а вертикальные ряды слева направо от играющего белыми – латинскими буквами a, b, c, d, e, f, g, h.',
                className: ''
            },
            {
                text: 'Называя сначала букву вертикали, а затем цифру горизонтали, можно обозначить любое поле шахматной доски. Каждый ход таврели указывается обозначением через дефис двух полей – откуда и куда переместилась таврель.',
                className: ''
            }
        ]
    }
];

