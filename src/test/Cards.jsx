import React from 'react'
import { Container, Col, Row, Card, Button } from 'react-bootstrap'
import { faCheck, faFire } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Cards() {
  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <Col className="col-lg-4 col-md-6 col-sm-12 my-3">
          <Card style={{height: "100vh"}}>
            <Card.Body>
              <div className='d-flex flex-column justify-content-between' style={{height: "100%"}}>
                <div className='d-flex justify-content-center align-items-center'>
                  <svg width="146" height="167" viewBox="0 0 146 167" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0228 40.1399C52.6794 38.7147 53.4484 37.6076 53.9567 37.0238C53.9666 38.4007 53.7545 39.6357 53.426 40.7092C54.4375 41.1971 55.4887 41.8804 56.4931 42.8232C55.7192 42.7997 54.3837 42.6123 52.8911 42.1261C52.203 43.6439 51.333 44.6919 50.7626 45.1797C50.8012 43.9024 51.0701 42.6783 51.4477 41.5741C50.3812 41.1015 49.3006 40.4678 48.3372 39.6291C49.0824 39.5417 50.4419 39.6147 52.0228 40.1399Z" fill="url(#paint0_linear_1_291)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M46.8326 25.8575C47.2698 24.9085 47.7818 24.1713 48.1202 23.7826C48.1268 24.6994 47.9855 25.5218 47.7667 26.2365C48.4399 26.5613 49.1396 27.016 49.808 27.6435C49.2929 27.6279 48.4041 27.5031 47.4106 27.1796C46.9526 28.1895 46.3737 28.8868 45.9941 29.2114C46.0198 28.3615 46.1987 27.547 46.4499 26.8122C45.7399 26.4976 45.0205 26.0757 44.3792 25.5174C44.8753 25.4593 45.7803 25.5079 46.8326 25.8575Z" fill="url(#paint1_linear_1_291)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M32.781 11.6606C33.4377 10.235 34.2069 9.12755 34.7152 8.54363C34.7252 9.9209 34.513 11.1563 34.1843 12.23C35.1956 12.7179 36.2465 13.401 37.2506 14.3436C36.4768 14.3202 35.1416 14.1328 33.6493 13.6468C32.9612 15.1641 32.0914 16.2118 31.5212 16.6995C31.5598 15.4226 31.8285 14.1988 32.206 13.0949C31.1392 12.6223 30.0583 11.9884 29.0947 11.1495C29.84 11.0621 31.1998 11.1352 32.781 11.6606Z" fill="url(#paint2_linear_1_291)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5553 43.6245C31.5215 41.5272 32.653 39.8981 33.4009 39.0391C33.4155 41.065 33.1034 42.8823 32.62 44.4618C34.1086 45.1797 35.6558 46.1851 37.134 47.5727C35.9951 47.5382 34.0295 47.2623 31.8328 46.5466C30.8204 48.7792 29.5407 50.3207 28.7017 51.0383C28.7585 49.1594 29.1539 47.3586 29.7093 45.7343C28.1408 45.0391 26.5516 44.1069 25.1348 42.8735C26.2308 42.745 28.2302 42.8523 30.5553 43.6245Z" fill="url(#paint3_linear_1_291)"/>
    <circle cx="36.3702" cy="29.2688" r="0.846528" transform="rotate(21.3865 36.3702 29.2688)" fill="#2F235A"/>
    <circle cx="57.3272" cy="18.6262" r="0.846528" transform="rotate(21.3865 57.3272 18.6262)" fill="#FE9076"/>
    <circle cx="17.0928" cy="23.2492" r="0.846528" transform="rotate(21.3865 17.0928 23.2492)" fill="#FFA400"/>
    <circle cx="35.2725" cy="57.3352" r="0.846528" transform="rotate(21.3865 35.2725 57.3352)" fill="#23BB86"/>
    <path d="M56.6838 14.5807C55.8602 11.4352 52.8876 4.24134 47.5856 0.629808" stroke="#FE9076" stroke-width="0.736823" stroke-linecap="round"/>
    <path d="M14.5939 19.8349C12.5446 17.3105 6.86597 11.9869 0.545683 10.8878" stroke="#FFA400" stroke-width="0.736823" stroke-linecap="round"/>
    <path d="M31.668 58.5664C29.8519 59.2287 25.2801 61.3392 21.5217 64.4825" stroke="#23BB86" stroke-width="0.736823" stroke-linecap="round"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M93.9889 40.1399C93.3323 38.7147 92.5633 37.6076 92.0551 37.0238C92.0451 38.4007 92.2572 39.6357 92.5857 40.7092C91.5742 41.1971 90.523 41.8804 89.5186 42.8232C90.2925 42.7997 91.628 42.6123 93.1206 42.1261C93.8088 43.6439 94.6788 44.6919 95.2491 45.1797C95.2105 43.9024 94.9416 42.6783 94.564 41.5741C95.6305 41.1015 96.7111 40.4678 97.6745 39.6291C96.9293 39.5417 95.5698 39.6147 93.9889 40.1399Z" fill="url(#paint4_linear_1_291)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M99.1791 25.8575C98.7419 24.9085 98.2299 24.1713 97.8915 23.7826C97.8849 24.6994 98.0262 25.5218 98.245 26.2365C97.5718 26.5613 96.8722 27.016 96.2037 27.6435C96.7188 27.6279 97.6077 27.5031 98.6011 27.1796C99.0591 28.1895 99.638 28.8868 100.018 29.2114C99.9919 28.3615 99.813 27.547 99.5618 26.8122C100.272 26.4976 100.991 26.0757 101.633 25.5174C101.136 25.4593 100.231 25.5079 99.1791 25.8575Z" fill="url(#paint5_linear_1_291)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M113.231 11.6606C112.574 10.235 111.805 9.12755 111.296 8.54363C111.287 9.9209 111.499 11.1563 111.827 12.23C110.816 12.7179 109.765 13.401 108.761 14.3436C109.535 14.3202 110.87 14.1328 112.362 13.6468C113.05 15.1641 113.92 16.2118 114.491 16.6995C114.452 15.4226 114.183 14.1988 113.806 13.0949C114.872 12.6223 115.953 11.9884 116.917 11.1495C116.172 11.0621 114.812 11.1352 113.231 11.6606Z" fill="url(#paint6_linear_1_291)"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M115.456 43.6245C114.49 41.5272 113.359 39.8981 112.611 39.0391C112.596 41.065 112.908 42.8823 113.392 44.4618C111.903 45.1797 110.356 46.1851 108.878 47.5727C110.017 47.5382 111.982 47.2623 114.179 46.5466C115.191 48.7792 116.471 50.3207 117.31 51.0383C117.253 49.1594 116.858 47.3586 116.302 45.7343C117.871 45.0391 119.46 44.1069 120.877 42.8735C119.781 42.745 117.781 42.8523 115.456 43.6245Z" fill="url(#paint7_linear_1_291)"/>
    <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 109.642 29.2688)" fill="#2F235A"/>
    <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 88.6845 18.6262)" fill="#FE9076"/>
    <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 128.919 23.2492)" fill="#FFA400"/>
    <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 110.739 57.3352)" fill="#23BB86"/>
    <path d="M89.3279 14.5807C90.1515 11.4352 93.1241 4.24134 98.4261 0.629808" stroke="#FE9076" stroke-width="0.736823" stroke-linecap="round"/>
    <path d="M131.418 19.8349C133.467 17.3105 139.146 11.9869 145.466 10.8878" stroke="#FFA400" stroke-width="0.736823" stroke-linecap="round"/>
    <path d="M114.344 58.5664C116.16 59.2287 120.732 61.3392 124.49 64.4825" stroke="#23BB86" stroke-width="0.736823" stroke-linecap="round"/>
    <rect x="27.5346" y="103.893" width="89.8505" height="62.1103" fill="url(#paint8_linear_1_291)"/>
    <mask id="mask0_1_291" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="27" y="103" width="91" height="64">
    <rect x="27.5346" y="103.893" width="89.8505" height="62.1103" fill="#C4C4C4"/>
    </mask>
    <g mask="url(#mask0_1_291)">
    <path d="M31.786 102.311L92.968 102.311L79.1394 126.323L17.9574 126.323L31.786 102.311Z" fill="black" fill-opacity="0.07"/>
    <rect x="88.6365" y="103.893" width="89.8505" height="62.1103" fill="url(#paint9_linear_1_291)"/>
    </g>
    <path d="M27.4552 103.893L88.6372 103.893L76.8187 123.615L15.6367 123.615L27.4552 103.893Z" fill="url(#paint10_linear_1_291)"/>
    <mask id="mask1_1_291" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="88" y="103" width="30" height="64">
    <rect x="88.6372" y="103.893" width="28.7479" height="62.1103" fill="#C4C4C4"/>
    </mask>
    <g mask="url(#mask1_1_291)">
    <path d="M113.885 103.789L85.0924 103.789L98.6216 126.496L127.415 126.496L113.885 103.789Z" fill="black" fill-opacity="0.07"/>
    </g>
    <path d="M117.431 103.893L88.6386 103.893L100.457 123.615L129.25 123.615L117.431 103.893Z" fill="url(#paint11_linear_1_291)"/>
    <circle cx="59.3854" cy="86.6939" r="8.49082" fill="url(#paint12_linear_1_291)"/>
    <circle cx="85.7868" cy="75.3454" r="8.20473" fill="url(#paint13_linear_1_291)"/>
    <circle cx="67.8741" cy="54.4386" r="6.61631" fill="url(#paint14_linear_1_291)"/>
    <circle cx="90.2867" cy="53.441" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
    <circle cx="79.232" cy="90.9449" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
    <circle cx="52.1383" cy="65.4898" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
    <path d="M117.597 104.186H27.4634L13.6211 18.8379H134.219L117.597 104.186Z" fill="url(#paint15_linear_1_291)"/>
    <defs>
    <linearGradient id="paint0_linear_1_291" x1="53.7071" y1="37.9273" x2="50.7081" y2="45.5852" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint1_linear_1_291" x1="47.9538" y1="24.3839" x2="45.9576" y2="29.4812" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint2_linear_1_291" x1="34.4649" y1="9.44681" x2="31.4659" y2="17.1047" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint3_linear_1_291" x1="33.0354" y1="40.369" x2="28.6231" y2="51.6355" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint4_linear_1_291" x1="92.3046" y1="37.9273" x2="95.3036" y2="45.5852" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint5_linear_1_291" x1="98.0579" y1="24.3839" x2="100.054" y2="29.4812" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint6_linear_1_291" x1="111.547" y1="9.44681" x2="114.546" y2="17.1047" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint7_linear_1_291" x1="112.976" y1="40.369" x2="117.389" y2="51.6355" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFE89E"/>
    <stop offset="1" stop-color="#FFBF1A"/>
    </linearGradient>
    <linearGradient id="paint8_linear_1_291" x1="57.5489" y1="92.3935" x2="21.7386" y2="191.025" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD481"/>
    <stop offset="1" stop-color="#FA620C"/>
    </linearGradient>
    <linearGradient id="paint9_linear_1_291" x1="42.8644" y1="99.9531" x2="151.544" y2="216.093" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD481"/>
    <stop offset="0.83311" stop-color="#FA620C"/>
    </linearGradient>
    <linearGradient id="paint10_linear_1_291" x1="28.7143" y1="96.8437" x2="25.8066" y2="138.866" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD481"/>
    <stop offset="1" stop-color="#FA620C"/>
    </linearGradient>
    <linearGradient id="paint11_linear_1_291" x1="121.975" y1="96.8437" x2="127.146" y2="138.424" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FFD481"/>
    <stop offset="1" stop-color="#FA620C"/>
    </linearGradient>
    <linearGradient id="paint12_linear_1_291" x1="60.0283" y1="75.4009" x2="58.4132" y2="98.3197" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF9F81"/>
    <stop offset="1" stop-color="#F53838"/>
    </linearGradient>
    <linearGradient id="paint13_linear_1_291" x1="86.4081" y1="64.4328" x2="84.8474" y2="86.5794" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF9F81"/>
    <stop offset="1" stop-color="#F53838"/>
    </linearGradient>
    <linearGradient id="paint14_linear_1_291" x1="68.3751" y1="45.6387" x2="67.1166" y2="63.4977" gradientUnits="userSpaceOnUse">
    <stop stop-color="#FF9F81"/>
    <stop offset="1" stop-color="#F53838"/>
    </linearGradient>
    <linearGradient id="paint15_linear_1_291" x1="72.9291" y1="18.8379" x2="72.9291" y2="200.162" gradientUnits="userSpaceOnUse">
    <stop stop-color="white" stop-opacity="0"/>
    <stop offset="1" stop-color="#FE9277"/>
    </linearGradient>
    </defs>
                  </svg>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <Card.Title><strong>Free Plan</strong></Card.Title>
                  </div>
                  <Card.Text className="d-flex justify-content-center flex-column">
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Unlimited bandwidth</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Encrypted Connection</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">No Traffic Logs</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Works On All Devices</div>
                    </div>
                  </Card.Text>
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center mb-2">
                    <h4 className="display-6"><strong>Free</strong></h4>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button variant="outline-primary px-5">Select</Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 my-3">
          <Card style={{height: "100vh"}}>
            <Card.Body>
              <div className='d-flex flex-column justify-content-between' style={{height: "100%"}}>
                <div className="d-flex justify-content-center">
                  <svg width="146" height="167" viewBox="0 0 146 167" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M52.0228 40.1399C52.6794 38.7147 53.4484 37.6076 53.9566 37.0238C53.9666 38.4007 53.7545 39.6357 53.426 40.7092C54.4375 41.1971 55.4887 41.8804 56.4931 42.8232C55.7192 42.7997 54.3837 42.6123 52.8911 42.1261C52.2029 43.6439 51.3329 44.6919 50.7626 45.1797C50.8012 43.9024 51.0701 42.6783 51.4477 41.5741C50.3812 41.1015 49.3006 40.4678 48.3372 39.6291C49.0824 39.5417 50.4419 39.6147 52.0228 40.1399Z" fill="url(#paint0_linear_1_229)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M46.8326 25.8575C47.2697 24.9085 47.7818 24.1713 48.1202 23.7826C48.1268 24.6994 47.9855 25.5218 47.7667 26.2365C48.4399 26.5613 49.1395 27.016 49.808 27.6435C49.2929 27.6279 48.404 27.5031 47.4106 27.1796C46.9526 28.1895 46.3737 28.8868 45.9941 29.2114C46.0198 28.3615 46.1987 27.547 46.4499 26.8122C45.7399 26.4976 45.0205 26.0757 44.3792 25.5174C44.8752 25.4593 45.7802 25.5079 46.8326 25.8575Z" fill="url(#paint1_linear_1_229)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M32.781 11.6606C33.4377 10.235 34.2069 9.12755 34.7152 8.54363C34.7252 9.9209 34.5129 11.1563 34.1843 12.23C35.1955 12.7179 36.2464 13.401 37.2506 14.3436C36.4768 14.3202 35.1416 14.1328 33.6493 13.6468C32.9612 15.1641 32.0914 16.2118 31.5212 16.6995C31.5598 15.4226 31.8285 14.1988 32.2059 13.0949C31.1392 12.6223 30.0583 11.9884 29.0947 11.1495C29.84 11.0621 31.1998 11.1352 32.781 11.6606Z" fill="url(#paint2_linear_1_229)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M30.5553 43.6245C31.5214 41.5272 32.653 39.8981 33.4008 39.0391C33.4155 41.065 33.1033 42.8823 32.6199 44.4618C34.1086 45.1797 35.6557 46.1851 37.134 47.5727C35.9951 47.5382 34.0295 47.2623 31.8327 46.5466C30.8204 48.7792 29.5406 50.3207 28.7016 51.0383C28.7585 49.1594 29.1539 47.3586 29.7093 45.7343C28.1408 45.0391 26.5516 44.1069 25.1347 42.8735C26.2308 42.745 28.2302 42.8523 30.5553 43.6245Z" fill="url(#paint3_linear_1_229)"/>
  <circle cx="36.3701" cy="29.2688" r="0.846528" transform="rotate(21.3865 36.3701 29.2688)" fill="#2F235A"/>
  <circle cx="57.3272" cy="18.6262" r="0.846528" transform="rotate(21.3865 57.3272 18.6262)" fill="#FE9076"/>
  <circle cx="17.0928" cy="23.2492" r="0.846528" transform="rotate(21.3865 17.0928 23.2492)" fill="#FFA400"/>
  <circle cx="35.2725" cy="57.3352" r="0.846528" transform="rotate(21.3865 35.2725 57.3352)" fill="#23BB86"/>
  <path d="M56.6838 14.5807C55.8602 11.4352 52.8876 4.24134 47.5856 0.629808" stroke="#FE9076" stroke-width="0.736823" stroke-linecap="round"/>
  <path d="M14.5939 19.8349C12.5446 17.3105 6.86594 11.9869 0.545652 10.8878" stroke="#FFA400" stroke-width="0.736823" stroke-linecap="round"/>
  <path d="M31.6679 58.5664C29.8518 59.2287 25.2801 61.3392 21.5217 64.4825" stroke="#23BB86" stroke-width="0.736823" stroke-linecap="round"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M93.9889 40.1399C93.3322 38.7147 92.5633 37.6076 92.055 37.0238C92.0451 38.4007 92.2572 39.6357 92.5857 40.7092C91.5741 41.1971 90.5229 41.8804 89.5185 42.8232C90.2925 42.7997 91.6279 42.6123 93.1206 42.1261C93.8087 43.6439 94.6787 44.6919 95.2491 45.1797C95.2104 43.9024 94.9416 42.6783 94.564 41.5741C95.6305 41.1015 96.7111 40.4678 97.6745 39.6291C96.9293 39.5417 95.5698 39.6147 93.9889 40.1399Z" fill="url(#paint4_linear_1_229)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M99.1791 25.8575C98.7419 24.9085 98.2299 24.1713 97.8915 23.7826C97.8849 24.6994 98.0262 25.5218 98.245 26.2365C97.5717 26.5613 96.8721 27.016 96.2037 27.6435C96.7188 27.6279 97.6076 27.5031 98.6011 27.1796C99.0591 28.1895 99.638 28.8868 100.018 29.2114C99.9918 28.3615 99.813 27.547 99.5618 26.8122C100.272 26.4976 100.991 26.0757 101.632 25.5174C101.136 25.4593 100.231 25.5079 99.1791 25.8575Z" fill="url(#paint5_linear_1_229)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M113.231 11.6606C112.574 10.235 111.805 9.12755 111.296 8.54363C111.286 9.9209 111.499 11.1563 111.827 12.23C110.816 12.7179 109.765 13.401 108.761 14.3436C109.535 14.3202 110.87 14.1328 112.362 13.6468C113.05 15.1641 113.92 16.2118 114.49 16.6995C114.452 15.4226 114.183 14.1988 113.806 13.0949C114.872 12.6223 115.953 11.9884 116.917 11.1495C116.172 11.0621 114.812 11.1352 113.231 11.6606Z" fill="url(#paint6_linear_1_229)"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M115.456 43.6245C114.49 41.5272 113.359 39.8981 112.611 39.0391C112.596 41.065 112.908 42.8823 113.392 44.4618C111.903 45.1797 110.356 46.1851 108.878 47.5727C110.017 47.5382 111.982 47.2623 114.179 46.5466C115.191 48.7792 116.471 50.3207 117.31 51.0383C117.253 49.1594 116.858 47.3586 116.302 45.7343C117.871 45.0391 119.46 44.1069 120.877 42.8735C119.781 42.745 117.781 42.8523 115.456 43.6245Z" fill="url(#paint7_linear_1_229)"/>
  <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 109.642 29.2688)" fill="#2F235A"/>
  <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 88.6845 18.6262)" fill="#FE9076"/>
  <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 128.919 23.2492)" fill="#FFA400"/>
  <circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 110.739 57.3352)" fill="#23BB86"/>
  <path d="M89.3279 14.5807C90.1515 11.4352 93.1241 4.24134 98.4261 0.629808" stroke="#FE9076" stroke-width="0.736823" stroke-linecap="round"/>
  <path d="M131.418 19.8349C133.467 17.3105 139.146 11.9869 145.466 10.8878" stroke="#FFA400" stroke-width="0.736823" stroke-linecap="round"/>
  <path d="M114.344 58.5664C116.16 59.2287 120.732 61.3392 124.49 64.4825" stroke="#23BB86" stroke-width="0.736823" stroke-linecap="round"/>
  <rect x="28.0737" y="103.893" width="89.8505" height="62.1103" fill="url(#paint8_linear_1_229)"/>
  <mask id="mask0_1_229" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="28" y="103" width="90" height="64">
  <rect x="28.0737" y="103.893" width="89.8505" height="62.1103" fill="#C4C4C4"/>
  </mask>
  <g mask="url(#mask0_1_229)">
  <path d="M32.3251 102.311L93.507 102.311L79.6785 126.323L18.4965 126.323L32.3251 102.311Z" fill="black" fill-opacity="0.07"/>
  <rect x="89.1756" y="103.893" width="89.8505" height="62.1103" fill="url(#paint9_linear_1_229)"/>
  </g>
  <path d="M27.9943 103.893L89.1762 103.893L77.3577 123.615L16.1757 123.615L27.9943 103.893Z" fill="url(#paint10_linear_1_229)"/>
  <mask id="mask1_1_229" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="89" y="103" width="29" height="64">
  <rect x="89.1762" y="103.893" width="28.7479" height="62.1103" fill="#C4C4C4"/>
  </mask>
  <g mask="url(#mask1_1_229)">
  <path d="M114.424 103.789L85.6314 103.789L99.1607 126.496L127.954 126.496L114.424 103.789Z" fill="black" fill-opacity="0.07"/>
  </g>
  <path d="M117.971 103.893L89.1776 103.893L100.996 123.615L129.789 123.615L117.971 103.893Z" fill="url(#paint11_linear_1_229)"/>
  <circle cx="57.9244" cy="88.0729" r="8.49082" fill="url(#paint12_linear_1_229)"/>
  <circle cx="91.1266" cy="71.3786" r="8.20473" fill="url(#paint13_linear_1_229)"/>
  <circle cx="59.7999" cy="56.5558" r="6.61631" fill="url(#paint14_linear_1_229)"/>
  <circle cx="85.1414" cy="41.4168" r="5.98519" fill="url(#paint15_linear_1_229)"/>
  <circle cx="75.4" cy="63.8395" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
  <circle cx="100.982" cy="51.5895" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
  <circle cx="61.4508" cy="31.8804" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
  <circle cx="83.4898" cy="91.7379" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
  <circle cx="45.3414" cy="65.4898" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
  <path d="M118.136 104.186H28.0025L14.1601 18.8379H134.758L118.136 104.186Z" fill="url(#paint16_linear_1_229)"/>
  <defs>
  <linearGradient id="paint0_linear_1_229" x1="53.7071" y1="37.9273" x2="50.708" y2="45.5852" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint1_linear_1_229" x1="47.9538" y1="24.3839" x2="45.9576" y2="29.4812" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint2_linear_1_229" x1="34.4649" y1="9.44681" x2="31.4659" y2="17.1047" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint3_linear_1_229" x1="33.0353" y1="40.369" x2="28.6231" y2="51.6355" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint4_linear_1_229" x1="92.3046" y1="37.9273" x2="95.3036" y2="45.5852" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint5_linear_1_229" x1="98.0579" y1="24.3839" x2="100.054" y2="29.4812" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint6_linear_1_229" x1="111.547" y1="9.44681" x2="114.546" y2="17.1047" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint7_linear_1_229" x1="112.976" y1="40.369" x2="117.389" y2="51.6355" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFE89E"/>
  <stop offset="1" stop-color="#FFBF1A"/>
  </linearGradient>
  <linearGradient id="paint8_linear_1_229" x1="58.0879" y1="92.3935" x2="22.2777" y2="191.025" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD481"/>
  <stop offset="1" stop-color="#FA620C"/>
  </linearGradient>
  <linearGradient id="paint9_linear_1_229" x1="43.4034" y1="99.9531" x2="152.084" y2="216.093" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD481"/>
  <stop offset="0.83311" stop-color="#FA620C"/>
  </linearGradient>
  <linearGradient id="paint10_linear_1_229" x1="29.2533" y1="96.8437" x2="26.3457" y2="138.866" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD481"/>
  <stop offset="1" stop-color="#FA620C"/>
  </linearGradient>
  <linearGradient id="paint11_linear_1_229" x1="122.514" y1="96.8437" x2="127.685" y2="138.424" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FFD481"/>
  <stop offset="1" stop-color="#FA620C"/>
  </linearGradient>
  <linearGradient id="paint12_linear_1_229" x1="58.5673" y1="76.7798" x2="56.9523" y2="99.6986" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF9F81"/>
  <stop offset="1" stop-color="#F53838"/>
  </linearGradient>
  <linearGradient id="paint13_linear_1_229" x1="91.7479" y1="60.466" x2="90.1872" y2="82.6126" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF9F81"/>
  <stop offset="1" stop-color="#F53838"/>
  </linearGradient>
  <linearGradient id="paint14_linear_1_229" x1="60.3009" y1="47.7558" x2="59.0424" y2="65.6149" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF9F81"/>
  <stop offset="1" stop-color="#F53838"/>
  </linearGradient>
  <linearGradient id="paint15_linear_1_229" x1="85.5946" y1="33.4563" x2="84.4562" y2="49.6118" gradientUnits="userSpaceOnUse">
  <stop stop-color="#FF9F81"/>
  <stop offset="1" stop-color="#F53838"/>
  </linearGradient>
  <linearGradient id="paint16_linear_1_229" x1="73.4682" y1="18.8379" x2="73.4682" y2="200.162" gradientUnits="userSpaceOnUse">
  <stop stop-color="white" stop-opacity="0"/>
  <stop offset="1" stop-color="#FE9277"/>
  </linearGradient>
  </defs>
                  </svg>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <Card.Title><strong>Standard Plan</strong></Card.Title>
                  </div>
                  <Card.Text className="d-flex justify-content-center flex-column">
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Unlimited bandwidth</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Encrypted Connection</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Yes Traffic Logs</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Works On All Devices</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Connect Anywhere</div>
                    </div>
                  </Card.Text>
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="display-6">
                      <div className='inline m-0'><strong>$9{' '}</strong></div>
                      <div className="inline m-0">{' '}/mo</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button variant="outline-primary px-5">Select</Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-lg-4 col-md-6 col-sm-12 my-3">
          <Card style={{height: "100vh"}}>
            <Card.Body>
              <div className='d-flex flex-column justify-content-between' style={{height: "100%"}}>
                <div className="d-flex justify-content-center">
                <svg width="146" height="167" viewBox="0 0 146 167" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M52.0228 40.1399C52.6794 38.7147 53.4484 37.6076 53.9566 37.0238C53.9666 38.4007 53.7545 39.6357 53.426 40.7092C54.4375 41.1971 55.4887 41.8804 56.4931 42.8232C55.7192 42.7997 54.3837 42.6123 52.891 42.1261C52.2029 43.6439 51.3329 44.6919 50.7626 45.1797C50.8012 43.9024 51.0701 42.6783 51.4477 41.5741C50.3812 41.1015 49.3006 40.4678 48.3372 39.6291C49.0824 39.5417 50.4419 39.6147 52.0228 40.1399Z" fill="url(#paint0_linear_1_350)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M46.8326 25.8575C47.2697 24.9085 47.7818 24.1713 48.1202 23.7826C48.1268 24.6994 47.9855 25.5218 47.7667 26.2365C48.4399 26.5613 49.1395 27.016 49.808 27.6435C49.2929 27.6279 48.404 27.5031 47.4105 27.1796C46.9526 28.1895 46.3737 28.8868 45.9941 29.2114C46.0198 28.3615 46.1986 27.547 46.4499 26.8122C45.7399 26.4976 45.0205 26.0757 44.3792 25.5174C44.8752 25.4593 45.7802 25.5079 46.8326 25.8575Z" fill="url(#paint1_linear_1_350)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M32.781 11.6606C33.4377 10.235 34.2069 9.12755 34.7152 8.54363C34.7252 9.9209 34.5129 11.1563 34.1843 12.23C35.1955 12.7179 36.2464 13.401 37.2506 14.3436C36.4768 14.3202 35.1416 14.1328 33.6493 13.6468C32.9612 15.1641 32.0914 16.2118 31.5212 16.6995C31.5598 15.4226 31.8285 14.1988 32.2059 13.0949C31.1392 12.6223 30.0583 11.9884 29.0947 11.1495C29.84 11.0621 31.1998 11.1352 32.781 11.6606Z" fill="url(#paint2_linear_1_350)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M30.5553 43.6245C31.5214 41.5272 32.653 39.8981 33.4008 39.0391C33.4155 41.065 33.1033 42.8823 32.6199 44.4618C34.1086 45.1797 35.6557 46.1851 37.134 47.5727C35.9951 47.5382 34.0295 47.2623 31.8327 46.5466C30.8204 48.7792 29.5406 50.3207 28.7016 51.0383C28.7585 49.1594 29.1539 47.3586 29.7093 45.7343C28.1408 45.0391 26.5516 44.1069 25.1347 42.8735C26.2308 42.745 28.2302 42.8523 30.5553 43.6245Z" fill="url(#paint3_linear_1_350)"/>
<circle cx="36.3701" cy="29.2688" r="0.846528" transform="rotate(21.3865 36.3701 29.2688)" fill="#2F235A"/>
<circle cx="57.3272" cy="18.6262" r="0.846528" transform="rotate(21.3865 57.3272 18.6262)" fill="#FE9076"/>
<circle cx="17.0928" cy="23.2492" r="0.846528" transform="rotate(21.3865 17.0928 23.2492)" fill="#FFA400"/>
<circle cx="35.2725" cy="57.3352" r="0.846528" transform="rotate(21.3865 35.2725 57.3352)" fill="#23BB86"/>
<path d="M56.6838 14.5807C55.8602 11.4352 52.8876 4.24134 47.5856 0.629808" stroke="#FE9076" stroke-width="0.736823" stroke-linecap="round"/>
<path d="M14.5939 19.8349C12.5446 17.3105 6.86594 11.9869 0.545652 10.8878" stroke="#FFA400" stroke-width="0.736823" stroke-linecap="round"/>
<path d="M31.6679 58.5664C29.8518 59.2287 25.2801 61.3392 21.5217 64.4825" stroke="#23BB86" stroke-width="0.736823" stroke-linecap="round"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M93.9889 40.1399C93.3323 38.7147 92.5633 37.6076 92.055 37.0238C92.0451 38.4007 92.2572 39.6357 92.5857 40.7092C91.5741 41.1971 90.5229 41.8804 89.5185 42.8232C90.2925 42.7997 91.628 42.6123 93.1206 42.1261C93.8087 43.6439 94.6787 44.6919 95.2491 45.1797C95.2104 43.9024 94.9416 42.6783 94.564 41.5741C95.6305 41.1015 96.7111 40.4678 97.6745 39.6291C96.9293 39.5417 95.5698 39.6147 93.9889 40.1399Z" fill="url(#paint4_linear_1_350)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M99.1791 25.8575C98.7419 24.9085 98.2299 24.1713 97.8915 23.7826C97.8849 24.6994 98.0262 25.5218 98.245 26.2365C97.5717 26.5613 96.8721 27.016 96.2037 27.6435C96.7188 27.6279 97.6076 27.5031 98.6011 27.1796C99.0591 28.1895 99.638 28.8868 100.018 29.2114C99.9918 28.3615 99.813 27.547 99.5618 26.8122C100.272 26.4976 100.991 26.0757 101.632 25.5174C101.136 25.4593 100.231 25.5079 99.1791 25.8575Z" fill="url(#paint5_linear_1_350)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M113.231 11.6606C112.574 10.235 111.805 9.12755 111.296 8.54363C111.286 9.9209 111.499 11.1563 111.827 12.23C110.816 12.7179 109.765 13.401 108.761 14.3436C109.535 14.3202 110.87 14.1328 112.362 13.6468C113.05 15.1641 113.92 16.2118 114.49 16.6995C114.452 15.4226 114.183 14.1988 113.806 13.0949C114.872 12.6223 115.953 11.9884 116.917 11.1495C116.172 11.0621 114.812 11.1352 113.231 11.6606Z" fill="url(#paint6_linear_1_350)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M115.456 43.6245C114.49 41.5272 113.359 39.8981 112.611 39.0391C112.596 41.065 112.908 42.8823 113.392 44.4618C111.903 45.1797 110.356 46.1851 108.878 47.5727C110.017 47.5382 111.982 47.2623 114.179 46.5466C115.191 48.7792 116.471 50.3207 117.31 51.0383C117.253 49.1594 116.858 47.3586 116.302 45.7343C117.871 45.0391 119.46 44.1069 120.877 42.8735C119.781 42.745 117.781 42.8523 115.456 43.6245Z" fill="url(#paint7_linear_1_350)"/>
<circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 109.642 29.2688)" fill="#2F235A"/>
<circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 88.6845 18.6262)" fill="#FE9076"/>
<circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 128.919 23.2492)" fill="#FFA400"/>
<circle r="0.846528" transform="matrix(-0.931142 0.364658 0.364658 0.931142 110.739 57.3352)" fill="#23BB86"/>
<path d="M89.3279 14.5807C90.1515 11.4352 93.1241 4.24134 98.4261 0.629808" stroke="#FE9076" stroke-width="0.736823" stroke-linecap="round"/>
<path d="M131.418 19.8349C133.467 17.3105 139.146 11.9869 145.466 10.8878" stroke="#FFA400" stroke-width="0.736823" stroke-linecap="round"/>
<path d="M114.344 58.5664C116.16 59.2287 120.732 61.3392 124.49 64.4825" stroke="#23BB86" stroke-width="0.736823" stroke-linecap="round"/>
<rect x="26.8159" y="103.893" width="89.8505" height="62.1103" fill="url(#paint8_linear_1_350)"/>
<mask id="mask0_1_350" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="26" y="103" width="91" height="64">
<rect x="26.8159" y="103.893" width="89.8505" height="62.1103" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask0_1_350)">
<path d="M31.0672 102.311L92.2492 102.311L78.4206 126.323L17.2386 126.323L31.0672 102.311Z" fill="black" fill-opacity="0.07"/>
<rect x="87.9178" y="103.893" width="89.8505" height="62.1103" fill="url(#paint9_linear_1_350)"/>
</g>
<path d="M26.7364 103.893L87.9184 103.893L76.0999 123.615L14.9179 123.615L26.7364 103.893Z" fill="url(#paint10_linear_1_350)"/>
<mask id="mask1_1_350" style={{maskType:"alpha"}} maskUnits="userSpaceOnUse" x="87" y="103" width="30" height="64">
<rect x="87.9184" y="103.893" width="28.7479" height="62.1103" fill="#C4C4C4"/>
</mask>
<g mask="url(#mask1_1_350)">
<path d="M113.167 103.789L84.3736 103.789L97.9028 126.496L126.696 126.496L113.167 103.789Z" fill="black" fill-opacity="0.07"/>
</g>
<path d="M116.713 103.893L87.9198 103.893L99.7383 123.615L128.531 123.615L116.713 103.893Z" fill="url(#paint11_linear_1_350)"/>
<circle cx="56.7408" cy="88.0729" r="8.49082" fill="url(#paint12_linear_1_350)"/>
<circle cx="89.3727" cy="67.1403" r="8.20473" fill="url(#paint13_linear_1_350)"/>
<circle cx="58.6163" cy="56.5558" r="6.61631" fill="url(#paint14_linear_1_350)"/>
<circle cx="76.9891" cy="41.4481" r="5.98519" fill="url(#paint15_linear_1_350)"/>
<circle cx="65.2341" cy="24.824" r="4.6365" fill="url(#paint16_linear_1_350)"/>
<circle cx="73.2008" cy="65.4898" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
<circle cx="100.642" cy="51.5895" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
<circle cx="102.291" cy="24.8238" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
<circle cx="46.6031" cy="27.8101" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
<circle cx="80.2008" cy="91.7379" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
<circle cx="38.7945" cy="62.191" r="1.65" fill="#FFA800" fill-opacity="0.23"/>
<path d="M116.878 104.186H26.7447L12.9023 18.8379H133.5L116.878 104.186Z" fill="url(#paint17_linear_1_350)"/>
<defs>
<linearGradient id="paint0_linear_1_350" x1="53.7071" y1="37.9273" x2="50.708" y2="45.5852" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint1_linear_1_350" x1="47.9538" y1="24.3839" x2="45.9576" y2="29.4812" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint2_linear_1_350" x1="34.4649" y1="9.44681" x2="31.4659" y2="17.1047" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint3_linear_1_350" x1="33.0353" y1="40.369" x2="28.6231" y2="51.6355" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint4_linear_1_350" x1="92.3046" y1="37.9273" x2="95.3036" y2="45.5852" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint5_linear_1_350" x1="98.0579" y1="24.3839" x2="100.054" y2="29.4812" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint6_linear_1_350" x1="111.547" y1="9.44681" x2="114.546" y2="17.1047" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint7_linear_1_350" x1="112.976" y1="40.369" x2="117.389" y2="51.6355" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFE89E"/>
<stop offset="1" stop-color="#FFBF1A"/>
</linearGradient>
<linearGradient id="paint8_linear_1_350" x1="56.8301" y1="92.3935" x2="21.0198" y2="191.025" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD481"/>
<stop offset="1" stop-color="#FA620C"/>
</linearGradient>
<linearGradient id="paint9_linear_1_350" x1="42.1456" y1="99.9531" x2="150.826" y2="216.093" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD481"/>
<stop offset="0.83311" stop-color="#FA620C"/>
</linearGradient>
<linearGradient id="paint10_linear_1_350" x1="27.9955" y1="96.8437" x2="25.0879" y2="138.866" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD481"/>
<stop offset="1" stop-color="#FA620C"/>
</linearGradient>
<linearGradient id="paint11_linear_1_350" x1="121.256" y1="96.8437" x2="126.428" y2="138.424" gradientUnits="userSpaceOnUse">
<stop stop-color="#FFD481"/>
<stop offset="1" stop-color="#FA620C"/>
</linearGradient>
<linearGradient id="paint12_linear_1_350" x1="57.3837" y1="76.7798" x2="55.7687" y2="99.6986" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9F81"/>
<stop offset="1" stop-color="#F53838"/>
</linearGradient>
<linearGradient id="paint13_linear_1_350" x1="89.994" y1="56.2277" x2="88.4333" y2="78.3743" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9F81"/>
<stop offset="1" stop-color="#F53838"/>
</linearGradient>
<linearGradient id="paint14_linear_1_350" x1="59.1173" y1="47.7558" x2="57.8588" y2="65.6149" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9F81"/>
<stop offset="1" stop-color="#F53838"/>
</linearGradient>
<linearGradient id="paint15_linear_1_350" x1="77.4423" y1="33.4876" x2="76.3038" y2="49.6431" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9F81"/>
<stop offset="1" stop-color="#F53838"/>
</linearGradient>
<linearGradient id="paint16_linear_1_350" x1="65.5852" y1="18.6573" x2="64.7033" y2="31.1723" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF9F81"/>
<stop offset="1" stop-color="#F53838"/>
</linearGradient>
<linearGradient id="paint17_linear_1_350" x1="72.2104" y1="18.8379" x2="72.2104" y2="200.162" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0"/>
<stop offset="1" stop-color="#FE9277"/>
</linearGradient>
</defs>
</svg>
                </div>
                <div>
                  <div className="d-flex justify-content-center">
                    <Card.Title><strong clasName="bolder">Premium Plan</strong></Card.Title>
                  </div>
                  <Card.Text className="d-flex justify-content-center flex-column">
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Unlimited bandwidth</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Encrypted Connection</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">No Traffic Logs</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Works On All Devices</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">Connects Anywhere</div>
                    </div>
                    <div className='py-1 ps-3'>
                      <div className="inline"><FontAwesomeIcon color="green" icon={faCheck}/>{' '}</div>
                      <div className="lead inline">More Features</div>
                    </div>
                  </Card.Text>
                </div>
                <div>
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <div className="display-6">
                      <div className='inline m-0'><strong>$12{' '}</strong></div>
                      <div className="inline m-0">{' '}/mo</div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <Button variant="outline-primary px-5">Select</Button>
                  </div>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
