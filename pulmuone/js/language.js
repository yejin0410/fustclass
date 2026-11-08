(() => {
  const translations = {
    "로그인":"Login","고객센터":"Customer Support","공지사항":"Notices","바른먹거리":"Right Food","뉴스룸":"Newsroom","회사소개":"About Us",
    "지속가능 식생활":"Sustainable Diet","지속가능식품":"Sustainable Foods","바른먹거리 원칙":"Right Food Principles","바른먹거리 캠페인":"Right Food Campaign","식품안전 및 품질정책":"Food Safety & Quality Policy",
    "풀무원뉴스":"Pulmuone News","ESG경영":"ESG Management","멀티미디어":"Media","자료&공지":"Resources & Notices","총괄CEO인사말":"CEO's Message","CI소개":"Corporate Identity","연혁":"History","가치체계":"Core Values","사업소개":"Our Business","동반성장":"Shared Growth","기업지배구조":"Corporate Governance","투자정보":"Investor Relations",
    "나와 가족들의 건강, 더 나아가":"For the health of my family and me, and beyond","지구환경까지":"for the health of our planet","나와 가족들의 건강, 더 나아가 지구환경까지":"For the health of my family and me, and beyond, for the health of our planet",
    "바른먹거리로 사람과 지구의 건강한 내일을 만드는 풀무원":"Pulmuone creates a healthier tomorrow for people and the planet through Right Food.",
    "풀무원의 다양한 소식과 생생한 뉴스를 매일 만나보실 수 있습니다.":"Discover the latest news and stories from Pulmuone.",
    "뉴스룸 보러가기":"Visit Newsroom","자세히 보기":"Learn More","회사소개 바로가기":"About Us","뉴스룸 바로가기":"Newsroom","바른먹거리 바로가기":"Right Food",
    "캠페인과 함께 만드는 변화":"Creating Change Through Campaigns","사람과 지구를 위한 작은 실천이 더 나은 내일을 만듭니다.":"Small actions for people and the planet create a better tomorrow.",
    "지구를 위해, 오늘부터 작은 실천":"Small Actions for Our Planet, Starting Today","좋은 음식이 좋은 내일을 만듭니다":"Good Food Makes a Better Tomorrow","작은 행동으로 지구를 건강하게":"Small Actions for a Healthier Planet","건강한 식탁을 위한 오늘의 선택":"Today's Choice for a Healthy Table","더 나은 먹거리로 함께 만드는 변화":"Creating Change Together Through Better Food",
    "지속가능 식생활을 하면":"Benefits of a Sustainable Diet","좋은 점":"Benefits","몸에 좋은 균형 잡힌 식생활":"A Balanced Diet for Good Health","환경을 생각하는 소비":"Mindful Consumption for the Environment","함께 만드는 건강한 식문화":"Building a Healthy Food Culture Together",
    "다양한 식품을 골고루 먹고 나에게 필요한 양을 섭취하면 건강한 식생활 습관을 만드는 데 도움이 됩니다.":"Eating a variety of foods in appropriate portions helps build healthy eating habits.",
    "제철 식재료를 선택하고 음식물 쓰레기를 줄이는 행동은 식품 생산과 소비 과정의 환경 부담을 줄이는 데 보탬이 됩니다.":"Choosing seasonal ingredients and reducing food waste can help lessen the environmental impact of food production and consumption.",
    "음식을 존중하고 함께 나누는 식사 경험은 가족과 이웃이 건강한 식생활을 이어가는 계기가 됩니다.":"Respecting food and sharing meals can help families and communities maintain healthy eating habits.",
    "건강한 내일을 만드는":"Building a Healthier Tomorrow","바른 식습관":"Healthy Eating Habits","거창한 변화보다 매일 반복할 수 있는 작은 습관이 중요합니다.":"Small habits practiced every day matter more than drastic changes.",
    "식탁에서 바로 시작할 수 있는 네 가지 실천을 확인해 보세요.":"Explore four simple actions you can start at your table.",
    "다양한 식품을 골고루 먹기":"Eat a Variety of Foods","나에게 알맞은 양 먹기":"Eat the Right Portion","제철 식재료와 친환경적인 선택하기":"Choose Seasonal and Eco-Friendly Foods","음식 남기지 않고 올바르게 보관하기":"Avoid Food Waste and Store Food Properly",
    "채소와 과일, 곡류, 단백질 식품 등 여러 식품군을 균형 있게 선택해 보세요.":"Choose a balanced mix of food groups, including vegetables, fruits, grains, and protein.",
    "배고픔과 포만감을 살피며 과식하지 않고 적당한 양을 천천히 먹는 습관을 들여 보세요.":"Pay attention to hunger and fullness, and build the habit of eating slowly without overeating.",
    "계절에 맞는 식재료와 지역에서 생산된 식품을 살펴보고, 구매 전 필요한 양을 계획해 보세요.":"Look for seasonal and locally grown ingredients, and plan how much you need before shopping.",
    "식재료를 필요한 만큼 구매하고 보관 방법과 소비기한을 확인해 음식물 낭비를 줄여 보세요.":"Buy only what you need and check storage instructions and use-by dates to reduce food waste.",
    "건강생활 실천 지침":"Healthy Living Guidelines","식생활과 생활습관을 함께 돌보며 건강한 일상을 만들어 보세요.":"Build a healthy daily routine by caring for both your diet and lifestyle.",
    "아래 내용은 일상에서 참고할 수 있는 일반적인 실천 항목입니다.":"The following are general tips you can refer to in your daily life.",
    "서비스 점검 중입니다.":"Service Temporarily Unavailable","보다 안정적인 서비스 제공을 위해 페이지를 점검하고 있습니다.":"This page is currently under maintenance to provide a more reliable service.",
    "이용에 불편을 드려 죄송합니다.":"We apologize for the inconvenience.","점검이 완료된 후 더 나은 모습으로 찾아뵙겠습니다.":"We'll be back with an improved experience once maintenance is complete.",
    "잠시 후 다시 방문해 주세요.":"Please visit again soon.","풀무원 메인으로":"Back to Pulmuone Home","개인정보처리방침":"Privacy Policy","이용약관":"Terms of Use","고객기쁨센터":"Customer Happiness Center",
    "풀무원 리뉴얼 포트폴리오":"Pulmuone Website Redesign Portfolio","서비스 점검 안내":"Maintenance Notice","풀무원":"Pulmuone","바른먹거리로":"Through Right Food"
  };
  const originalNodes = [];
  const originalAttrs = [];
  const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (textWalker.nextNode()) {
    const node = textWalker.currentNode;
    if (node.nodeValue.trim()) originalNodes.push([node, node.nodeValue]);
  }
  const attrNames = ["alt","title","aria-label"];
  document.querySelectorAll("*").forEach(el => attrNames.forEach(name => {
    if (el.hasAttribute(name)) originalAttrs.push([el,name,el.getAttribute(name)]);
  }));
  const originalTitle = document.title;

  function translate(value) {
    let result = value;
    Object.keys(translations).sort((a,b)=>b.length-a.length).forEach(ko => {
      result = result.split(ko).join(translations[ko]);
    });
    return result;
  }
  function setLanguage(lang) {
    const english = lang === "en";
    originalNodes.forEach(([node,value]) => { node.nodeValue = english ? translate(value) : value; });
    originalAttrs.forEach(([el,name,value]) => el.setAttribute(name, english ? translate(value) : value));
    document.title = english ? translate(originalTitle) : originalTitle;
    document.documentElement.lang = lang;
    document.querySelectorAll(".language-button").forEach(button => {
      const selected = button.getAttribute("lang") === lang;
      button.classList.toggle("current", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    try { localStorage.setItem("pulmuone-language", lang); } catch (error) {}
  }
  document.addEventListener("click", event => {
    const button = event.target.closest(".language-button");
    if (!button) return;
    event.preventDefault();
    setLanguage(button.getAttribute("lang") === "en" ? "en" : "ko");
  });
  let savedLanguage = "ko";
  try { savedLanguage = localStorage.getItem("pulmuone-language") || "ko"; } catch (error) {}
  if (savedLanguage === "en") setLanguage("en");
})();