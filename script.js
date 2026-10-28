
// script.js : 내 영화 평점 통계(콘솔판)
 // 작성자 : 짠청코이(2594067)
console.log("내 영화 평점 통계(콘솔판)");
 const titles = [
    "러너 Runner",
    "愛のぬくもり 사랑의 형태",
    "오크 스트리트의 마지막 날 The End of Oak Street",
    "스파이더맨: 브랜드 뉴 데이 Spider-Man: Brand New Day",
    "토이 스토리 5 Toy Story 5"
  ];
  
  const years = [2026, 2024, 2026, 2026, 2026]; // 실제 개봉 연도 확인
  const ratings = [9.0, 7.3, 6.4, 8.0, 8.2];
  
  let sum = 0;
  
  for (let i = 0; i < ratings.length; i++) {
    sum = sum + ratings[i];
  }
  
  console.log("합계:", sum);
  
  const average = sum / ratings.length;
  console.log("평균:", average);
  
  let max = ratings[0];
  let maxIndex = 0;
  
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] > max) {
      max = ratings[i];
      maxIndex = i;
    }
  }
  
  console.log("최고:", titles[maxIndex], max);
  
  let count = 0;
  
  for (let i = 0; i < ratings.length; i++) {
    if (ratings[i] >= 8) count++;
  }
  
  console.log("8점 이상:", count + "편");
  
  for (let i = 0; i < ratings.length; i++) {
    let label;
  
    if (ratings[i] >= 8.5) {
      label = "명작";
    } else if (ratings[i] >= 7) {
      label = "추천";
    } else {
      label = "보통";
    }
  
    console.log(
      titles[i] + " (" + years[i] + ") : " +
      ratings[i] + " " + label
    );
  }
   const avgText = average.toFixed(1);
  const best = titles[maxIndex];
  
  alert(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);
  console.log(`내 영화 ${titles.length}편, 평균 ${avgText}점, 최고는 ${best}`);
