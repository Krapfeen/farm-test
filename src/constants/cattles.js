const cattles = [
  {
    name: "Куры",
    genus: "Chickens",
    subtypes: [
      {
        name: "Несушки",
        produced_goods: [
          { name: "Выведение из яиц" },
          { name: "Инкубационное яйцо" },
          { name: "Цыпленок" }
        ]
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
          { name: "Яйцо" },
          { name: "Инкубационное яйцо" },
          { name: "Цыпленок" }
        ]
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
    name: "Индейки",
    genus: "Turkeys",
    subtypes: [
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
    name: "Гуси",
    genus: "Geese",
    subtypes: [
      {
        name: "Мясные",
        produced_goods: [
          { name: "Яйцо" },
          { name: "Инкубационное яйцо" },
          { name: "Цыпленок" }
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
    genus: "Ducks",
    subtypes: [
      {
        name: "Мясные",
        produced_goods: [
          { name: "Яйцо" },
          { name: "Инкубационное яйцо" },
          { name: "Цыпленок" }
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
