const LEVELS = [
  {
    "name": "첫 번째 균열",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 4
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 7
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 0
      },
      {
        "id": "j",
        "type": "guard",
        "side": "b",
        "pos": 5
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 32
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 19
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 30
      }
    ],
    "walls": [
      20,
      25,
      12,
      6,
      1
    ],
    "limit": 9
  },
  {
    "name": "닫힌 통로",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 6
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 11
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 14
      },
      {
        "id": "j",
        "type": "hunter",
        "side": "b",
        "pos": 9
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 28
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 21
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 30
      }
    ],
    "walls": [
      22,
      33,
      12,
      31,
      34,
      16,
      23
    ],
    "limit": 9
  },
  {
    "name": "미끼의 값",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 11
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 16
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 17
      },
      {
        "id": "j",
        "type": "guard",
        "side": "b",
        "pos": 14
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 25
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 26
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 35
      }
    ],
    "walls": [
      23,
      18,
      13,
      8
    ],
    "limit": 9
  },
  {
    "name": "양자택일",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 4
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 7
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 16
      },
      {
        "id": "j",
        "type": "guard",
        "side": "b",
        "pos": 17
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 26
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 19
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 20
      }
    ],
    "walls": [
      18,
      13,
      27,
      22,
      25,
      2,
      9
    ],
    "limit": 9
  },
  {
    "name": "조용한 압박",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 17
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 16
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 13
      },
      {
        "id": "j",
        "type": "hunter",
        "side": "b",
        "pos": 14
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 19
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 24
      },
      {
        "id": "c",
        "type": "pusher",
        "side": "w",
        "pos": 31
      }
    ],
    "walls": [
      12,
      22,
      5,
      28,
      27,
      9
    ],
    "limit": 10
  },
  {
    "name": "잃어야 얻는 것",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 2
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 7
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 16
      },
      {
        "id": "j",
        "type": "hunter",
        "side": "b",
        "pos": 11
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 24
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 23
      },
      {
        "id": "c",
        "type": "pusher",
        "side": "w",
        "pos": 34
      }
    ],
    "walls": [
      14,
      25,
      3,
      26,
      17,
      28,
      31
    ],
    "limit": 10
  },
  {
    "name": "왕의 그림자",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 11
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 14
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 7
      },
      {
        "id": "j",
        "type": "guard",
        "side": "b",
        "pos": 6
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 35
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 20
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 25
      }
    ],
    "walls": [
      1,
      12,
      23,
      10,
      17,
      0
    ],
    "limit": 10
  },
  {
    "name": "돌아가는 길",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 0
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 3
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 11
      },
      {
        "id": "j",
        "type": "guard",
        "side": "b",
        "pos": 12
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 27
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 18
      },
      {
        "id": "c",
        "type": "pusher",
        "side": "w",
        "pos": 23
      }
    ],
    "walls": [
      5,
      35,
      22,
      33,
      8,
      30
    ],
    "limit": 11
  },
  {
    "name": "마지막 한 칸",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 5
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 12
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 0
      },
      {
        "id": "j",
        "type": "guard",
        "side": "b",
        "pos": 15
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 32
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 19
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 24
      }
    ],
    "walls": [
      10,
      29,
      28,
      3,
      18,
      1,
      7
    ],
    "limit": 11
  },
  {
    "name": "완벽한 열두 수",
    "pieces": [
      {
        "id": "k",
        "type": "king",
        "side": "b",
        "pos": 5
      },
      {
        "id": "g",
        "type": "guard",
        "side": "b",
        "pos": 12
      },
      {
        "id": "h",
        "type": "hunter",
        "side": "b",
        "pos": 10
      },
      {
        "id": "j",
        "type": "hunter",
        "side": "b",
        "pos": 9
      },
      {
        "id": "a",
        "type": "knight",
        "side": "w",
        "pos": 20
      },
      {
        "id": "b",
        "type": "jumper",
        "side": "w",
        "pos": 23
      },
      {
        "id": "c",
        "type": "knight",
        "side": "w",
        "pos": 30
      }
    ],
    "walls": [
      26,
      25,
      8,
      7,
      22,
      33,
      31
    ],
    "limit": 12
  }
];
