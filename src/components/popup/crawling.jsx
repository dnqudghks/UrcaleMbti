import React, { useEffect, useState } from 'react';
import puppeteer from 'puppeteer';

// Puppeteer를 사용하여 데이터를 가져오는 함수
async function fetchDataFromPuppeteer() {
  try {
    // headless 브라우저 실행
    const browser = await puppeteer.launch();
    // 새로운 페이지 열기
    const page = await browser.newPage();
    // url에 접속
    await page.goto('https://www.coupang.com/np/categories/306749?channel=plp_C2');

    await page.waitForSelector('.newcx-container');
    const productsData = await page.evaluate(() => {
      const productList = document.querySelectorAll('.newcx-container .newcx-body .newcx-main .newcx-list ul li');
      const products = [];
      productList.forEach((productElement) => {
        const src = `http:${productElement.querySelector('dl img').getAttribute('src')}`;
        const name = productElement.querySelector('dl img').getAttribute('alt');
        const price = productElement.querySelector('dl dd .sale .price-value').textContent;
        const a = `https://www.coupang.com/${productElement.querySelector('a').getAttribute('href')}`;
        products.push({ src, name, price, a });
      });
      return products;
    });
    console.log(productsData)
    await page.close();
    await browser.close();
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// React 컴포넌트에서 데이터 사용하기
function CoupangData() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Puppeteer를 사용하여 데이터 가져오기
    fetchDataFromPuppeteer().then((result) => {
      setData(result);
    });
  }, []);

  return (
    <div>
      {data && data.map((product, index) => (
        <div key={index}>
          <a href={product.a}> 
            <img src={product.src} alt={product.name} />
            <p>{product.name}</p>
            <p>{product.price}</p>
          </a>
        </div>
      ))}
    </div>
  );
}


export default CoupangData;
