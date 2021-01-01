const StoryExample = [
  //각 글은 여러 section의 list로 이루어짐.
  [
    {
      type: "image",
      detail: {
        size: "normal", //이미지의 크기를 결정. small, normal, large, largest있음.
        //이미지 주소
        imgsrc:
          "https://miro.medium.com/max/2363/1*G7_pAKAKTmM9bjob5OSTDA.jpeg",
        content: "normal", //캡션
      },
    },
  ],
  [
    {
      type: "paragraph",
      detail: {
        content: "<a href='/main' color=#292929>This is Sample Text.</a> <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "largest",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "<a href='/main' color=#292929>This is Sample Text.</a> <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "large",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "<a href='/main' color=#292929>This is Sample Text.</a> <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "normal",
      }
    },
  ],
  [
    {
      type: "image",
      detail: {
        size: "large", //이미지의 크기를 결정. small, normal, large, largest있음.
        //이미지 주소
        imgsrc:
          "https://miro.medium.com/max/2363/1*G7_pAKAKTmM9bjob5OSTDA.jpeg",
        content: "large", //캡션
      },
    },
  ],
  
  [
    {
      type: "paragraph",
      detail: {
        content: "<a href='/main' color=#292929>This is Sample Text.</a> <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "emphasize1",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "<a href='/main' color=#292929>This is Sample Text.</a> <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "emphasize2",
      }
    },
  ],
  [
    {
      type: "image",
      detail: {
        size: "largest", //이미지의 크기를 결정. small, normal, large, largest있음.
        //이미지 주소
        imgsrc:
          "https://miro.medium.com/max/2363/1*G7_pAKAKTmM9bjob5OSTDA.jpeg",
        content: "largest", //캡션
      },
    },
  ],
]

export default StoryExample
