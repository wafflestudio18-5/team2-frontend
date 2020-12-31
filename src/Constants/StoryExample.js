const StoryExample = [
  //각 글은 여러 section의 list로 이루어짐.
  [
    {
      type: "paragraph",
      detail: {
        content: "Normal <em>hello! <strong>asdbasdnb</strong>asdbpoiahsb</em>",
        emphasizing: "normal",
      },
    },
  ],
  [
    {
      type: "image",
      detail: {
        size: "large", //이미지의 크기를 결정. small, normal, large, largest있음.
        //이미지 주소
        imgsrc:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOJtsADIlVCT6wf5DooH_nMKAIaVXoIvlJaw&usqp=CAU",
        content: "image caption example", //캡션
      },
    },
  ],
  [
    {
      type: "paragraph",
      detail: {
        content: "This is Sample Text. <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "largest",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "This is Sample Text. <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "large",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "This is Sample Text. <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "normal",
      }
    },
  ],
  [
    {
      type: "paragraph",
      detail: {
        content: "This is Sample Text. <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "emphasize1",
      }
    },
    {
      type: "paragraph",
      detail: {
        content: "This is Sample Text. <em>This is Sample Text.</em> <strong>This is Sample Text.</strong> This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. This is Sample Text. ",
        emphasizing: "emphasize2",
      }
    },
  ],
]

export default StoryExample
