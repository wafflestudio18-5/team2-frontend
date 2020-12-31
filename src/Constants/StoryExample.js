const StoryExample = [
  //각 글은 여러 section의 list로 이루어짐.
  [
    //하나의 section은 여러 글이나 이미지들의 list로 이루어짐.
    {
      type: "paragraph", //type은 paragraph, image가 있음.
      detail: {
        //detail안에 서식이나 내용 등에 관한 정보가 들어있음.
        content: "Kicker", //글의 내용
        emphasizing: "large", //글의 강조 효과. largest, large, emphasize1, emphasize2 있음.
        //largest인 경우, italic, bold, href는 무시
        //large인 경우, italic과 bold는 무시되지만, href는 작동.
        //emphasize1은 모두 작동.
        //emphasize2는 href만 작동.
      },
    },
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
        emphasizing: "kicker",
      }
    },
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
