const cattles = [
  // {
  //   type: [{
  //     genus: 'Chickens',
  //     name: 'Куры'
  //   },
  //   {
  //     genus: 'Quails',
  //     name: 'Перепела'
  //   },
  //   {
  //     genus: 'Turkeys',
  //     name: 'Индейки'
  //   },],
  //   purchase: {
  //     egg: 'Яйцо',
  //     chick: 'Цыплята',
  //     pullet: 'Молодки',
  //   },
  // },
  {
    name: "Куры",
    genus: "Chickens",
    subtypes: [
      {
        name: "Несушки",
        produced_goods: [
          { name: "Яйцо" },
          { name: "Инкубационное яйцо" },
          { name: "Цыпленок" }]
      },
      {
        name: "Мясные",
      },
    ],
    produced_goods: [
      { name: "Мясо" },
      { name: "Цыпленок" }
    ],
    appearance_methods: [
      { name: "Выведение из яиц" },
      { name: "Покупка молодняка" },
      { name: "Инкубация" }
    ],
  },
  {
    name: "Перепела",
    genus: "Quails",
    subtypes: [
      {
        name: "Несушки",
        produced_goods: [
          'Яйца',
          'Мясо',
        ]
      },
      {
        name: "Мясные",
        produced_goods: [
          'Мясо',
        ]
      },
    ],
    appearance_methods: [
      { name: "Выведение из яиц" },
      { name: "Покупка молодняка" },
      { name: "Инкубация" }
    ],
  },
  {
    name: "Индейки",
    genus: "Turkeys",
    subtypes: [
      {
        name: "Мясные",
        produced_goods: [
          'Яйца',
          'Мясо',
        ]
      },
    ],
    appearance_methods: [
      { name: "Выведение из яиц" },
      { name: "Покупка молодняка" },
      { name: "Инкубация" }
    ],
  },
  {
    name: "Гуси",
    genus: "Turkeys",
    subtypes: [
      {
        name: "Мясные",
        produced_goods: [
          'Яйца',
          'Мясо',
        ]
      },
    ],
    appearance_methods: [
      { name: "Выведение из яиц" },
      { name: "Покупка молодняка" },
      { name: "Инкубация" }
    ],
  },
  {
    name: "Утки",
    genus: "Turkeys",
    subtypes: [
      {
        name: "Мясные",
        produced_goods: [
          'Яйца',
          'Мясо',
        ]
      },
    ],
    appearance_methods: [
      { name: "Выведение из яиц" },
      { name: "Покупка молодняка" },
      { name: "Инкубация" }
    ],
  },
]

export default cattles
