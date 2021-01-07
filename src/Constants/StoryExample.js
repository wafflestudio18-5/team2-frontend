const StoryExample = [
  //각 글은 여러 section의 list로 이루어짐.
  [
    {
      type: "paragraph",
      detail: {
        content: "Title ",
        emphasizing: "largest",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "asdf",
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
        size: "normal", 
        imgsrc:
          "https://miro.medium.com/max/2363/1*G7_pAKAKTmM9bjob5OSTDA.jpeg",
        content: "normal", 
      },
    },
  ],
  
  [
    {
      type: "image",
      detail: {
        size: "large", 
        imgsrc:
          "https://miro.medium.com/max/2363/1*G7_pAKAKTmM9bjob5OSTDA.jpeg",
        content: "large",
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
        size: "largest", 
        imgsrc:
          "https://miro.medium.com/max/2363/1*G7_pAKAKTmM9bjob5OSTDA.jpeg",
        content: "largest", 
      },
    },
  ],
]

export default StoryExample
