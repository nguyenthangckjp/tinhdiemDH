function calculateScore() {
    var mathScore = parseFloat(document.getElementById('math-score').value);
    var literatureScore = parseFloat(document.getElementById('literature-score').value);
    var englishScore = parseFloat(document.getElementById('english-score').value);
    var area = document.getElementById('area').value;
    var areaScore = 0;
  
    if (area === 'KV1') {
      areaScore = 0.75;
    } else if (area === 'KV2-NT') {
      areaScore = 0.5;
    } else if (area === 'KV2') {
      areaScore = 0.25;
    }
  
    var totalScore = mathScore + literatureScore + englishScore + areaScore;
  
    document.getElementById('result').innerHTML = 'Tổng điểm ĐH khối D của ban là: ' + totalScore;
  }