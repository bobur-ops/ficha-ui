interface IMULTI_SELECT_DATA {
  name: string
  selected?: boolean
}

export const MULTI_SELECT_DATA: IMULTI_SELECT_DATA[] = [
  {
    name: 'UI-UX',
  },
  {
    name: 'WEBDESIGN',
  },
  {
    name: 'LOGO',
  },
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
  {
    name: 'FLAT',
  },
]

export const COURSES_MULTI_SELECT_DATA1: IMULTI_SELECT_DATA[] = [
  {
    name: 'UI-UX',
  },
  {
    name: 'WEBDESIGN',
  },
  {
    name: 'LOGO',
  },
]

export const COURSES_MULTI_SELECT_DATA2: IMULTI_SELECT_DATA[] = [
  {
    name: 'HTML',
  },
  {
    name: 'CSS',
  },
]

interface IMENTORS {
  name: string
  label: string
  desc: string
  img: string
}

export const MENTORS: IMENTORS[] = [
  {
    name: 'Руслан',
    label: 'сеньор-помидор',
    desc: 'он тут самый умный, поэтому ему лень давать уроки, но ты можешь попробовать',
    img: 'ruslan',
  },
  {
    name: 'максим',
    label: 'тоже крутой',
    desc: 'решает проблемы о которых никто не знает, таким способом, который никто не понимает',
    img: 'maksim',
  },
  {
    name: 'мария',
    label: 'вэб-дизайнер',
    desc: 'дизайнер этой платформы. Иллюстранутая на всю голову. но, у нас другой нет.',
    img: 'mariya',
  },
]

export const TRAJECTORY_DATA = [
  {
    id: 1,
    text: 'За 7 дней ты узнаешь, что HTmL это не микроорганизмы, которые живут на поверхности океана',
  },
  {
    id: 2,
    text: 'Сверстаешь свой первый “ Все супер, только переделайте пожалуйста. все!”',
  },
  {
    id: 3,
    text: 'Больше никогда не попросишь у программиста починить твой сраный утюг',
  },
  {
    id: 4,
    text: 'Здесь должно быть написано то чему ты научишься, но дизайнер не написал этого',
  },
  {
    id: 5,
    text: 'Здесь должно быть написано то чему ты научишься, но дизайнер не написал этого',
  },
]

export const ABOUT_FEATS = [
  {
    img: 'first',
    text: 'видео-аудио связь',
  },
  {
    img: 'first',
    text: 'проверка домашних заданий',
  },
  {
    img: 'first',
    text: 'первые 3 лайка на бехансе',
  },
  {
    img: 'first',
    text: 'помощь с первым заказом',
  },
]

export const STOCK_FREEBIE = [
  {
    img: 'first',
    type: 'интенсив для чайников',
    title: 'прямой эфир в instagram',
    date: '17 апреля',
    feats: [
      {
        text: 'Как оформить свое портфолио, так чтобы оно приносило денег?',
      },
    ],
    leftPlace: 9,
  },
  {
    img: 'second',
    type: 'закрытая трансляция',
    title: 'прямой эфир в youtube',
    date: '9 марта',
    feats: [
      {
        text: 'Лого за 2 часа. Иконки, как бизнес.',
      },
    ],
    leftPlace: 0,
  },
  {
    img: 'third',
    type: 'конкурс',
    title: 'верстка за 40 минут',
    date: '1 апреля',
    feats: [
      {
        text: 'Конкурс среди учеников зарегистрированных не позднее 01.01.21. Призы APPLE WATCH 6, гантели и путевка на двоих  в Турцию.',
      },
    ],
    leftPlace: 2,
  },
]

export const REVIEWS = [
  {
    img: 'ivan',
    profession: 'верстальщик',
    name: 'иван',
    lastName: 'иванов',
    registeredAt: '26.02.2020',
    review: 'самый лучший у самых лучших',
  },
  {
    img: 'ivan',
    profession: 'дизайнер',
    name: 'иван',
    lastName: 'иванов',
    registeredAt: '26.02.2020',
    review: 'самый лучший у самых лучших',
  },
  {
    img: 'ivan',
    profession: 'верстальщик',
    name: 'иван',
    lastName: 'иванов',
    registeredAt: '26.02.2020',
    review: 'самый лучший у самых лучших',
  },
]

export const STUDENTS_WORKS = [
  {
    img: '1',
    label: 'дизайнер',
    author: 'иван иванов',
    authorRegisteredAt: '26.02.2020',
    timeLearning: 1,
  },
  {
    img: '2',
    label: 'верстальщик',
  },
  {
    img: '3',
    label: 'верстальщик',
  },
  {
    img: '4',
    label: 'верстальщик',
  },
  {
    img: '5',
    label: 'дизайнер',
    author: 'иван иванов',
    authorRegisteredAt: '26.02.2020',
    timeLearning: 6,
  },
  {
    img: '6',
    label: 'дизайнер',
  },
  {
    img: '7',
    label: 'верстальщик',
  },
]

export const PROGRESS_BAR_DATA = [
  {
    progress: 89,
    count: 13054,
    info: 'выбрали нас',
  },
  {
    progress: 91,
    count: 46005,
    info: 'совместных проектов',
  },
  {
    progress: 96,
    count: 11804,
    info: 'положительных отзыва',
  },
]

export const ARTICLES = [
  {
    label: 'код',
    views: '1212',
    postedAt: '27 февраля',
    tags: ['статья'],
    title: 'как привязать домен к хостинггу',
    info: 'В данной статье рассмотрим, как прикрепить доменное имя к хостингу и как привязать домен к хостингу.',
  },
  {
    label: 'дизайн',
    views: '6212',
    postedAt: '26 февраля',
    tags: ['статья'],
    title: 'как сделать эффект капель',
    info: 'В СТАТЬЕ ПОДРОБНАЯ ИНСТРУКЦИЯ, КАК РАСПЛАВИТЬ ШРИФТ РАСПЛАВИТЬ ШРИФТ РАСПЛАВИТЬ ШРИФТРАСПЛАВИТЬ ШРИФТРАСПЛАВИТЬ ШРИФТ',
  },
]

export const TARIFS = [
  {
    title: 'дешман',
    price: '100$',
    lessonsCount: 5,
    hours: 12,
    desc: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла',
  },
  {
    title: 'поднакопил',
    price: '300$',
    lessonsCount: 15,
    hours: 122,
    desc: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла',
  },
  {
    title: 'буржуй',
    price: '800$',
    lessonsCount: 25,
    hours: 172,
    desc: 'бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла бла',
  },
]
