import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { css, withStyles } from '@material-ui/core/styles';

import {Card} from 'material-ui/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const classes = theme => withStyles({
  card: {
    display: 'flex',
  },
  details: {
    // display: 'flex',
    // flexDirection: 'column',
  },
  content: {
    // flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    // display: 'flex',
    // alignItems: 'center',
    // paddingLeft: theme.spacing.unit,
    // paddingBottom: theme.spacing.unit,
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  line: {
    color: '#ffffff',
    height: '2px',
    overflow: 'hidden'
  }
});


const says = [
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_fjc0UXoPachwbV4ZbJVy-8lYv2VAVnvlKjSkiKDYJOit6vLi",
    text: "잘 사는 사람은 좋은 사람 되기 쉬워",
    author: "나의 아저씨, 지안"
  },
  {
    img: "https://steemitimages.com/0x0/https://cdn.steemitimages.com/DQmdDrBRr8atszmkF3uxBrKquRaHvgAbzcd9P3ByCTPNRG4/%EB%82%98%EC%9D%98%20%EC%95%84%EC%A0%80%EC%94%A816.jpg",
    text: "잘난 척 하는 인간들로 바글대는 세상, 너무 지겨워.\n\n난 잘난게 하나도 없어서 더 죽을 거 같아요.",
    author: "나의 아저씨, 유라"
  },

  {
    img: "https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory&fname=http%3A%2F%2Fcfile8.uf.tistory.com%2Fimage%2F2442904E586F84D50D80FB",
    text: "그 아이만이 날 죽일 수 있는데... 그 아이가 날 자꾸 살게 해.",
    author: "도깨비, 김신"
  },
  {
    text: "우주를 단 한사람으로 축소하고, 한 사람을 신으로 확대하면 그것이 바로 사랑이다.",
    author: "빅토르 위고"
  },
  {
    text: "부부란 서로 반씩 되는 것이 아니라, 하나로써 전체가 되는 것이다.",
    author: "반 고흐"
  },
  {
    text: "인생에 있어서 최고의 행복은 사랑받고 있다는 확신이다.",
    author: "빅토르 위고"
  },
  {
    text: "누군가를 사랑한다는 것은 자신을 그와 동일시 하는 것이다.",
    author: "아리스토텔레스"
  },
  {
    img: "http://www.cartoon.or.kr/image/profile/writer_upload/4212.jpg",
    text: "그냥 너무 기뻐서 자꾸 슬픈 사람들의 얼굴이 떠올라.\n\n그 사람들도 같이 이 기쁨을 누리면 좋을 텐데.",
    author: "떠돌이 용병 아레스"
  },
  {
    text: "사람은 자신의 장점 때문에 찾아온 사랑에 흔들리지만\n\n결국에는 자신의 결점을 사랑해 주는 사람에게 돌아간다.",
    author: "김재식, 사랑할 떄 알아야 할 것들"
  },
  {
    text: "생각할 시간이 필요하다는 말은 마음의 여유가 없다는 뜻이 아니라\n\n" +
    "이미 내린 결론을 조금만 더 미루고 싶을 때 나오는 말일지도 모른다.",
    author: "생각할 시간"
  },
  {
    img: "http://pds21.egloos.com/pds/201406/13/74/d0014374_539a46dc98858.jpg",
    text: "따지고 보면 사랑도 구라야! 사랑은 상대방을 속이고 자기 자신까지 속이거든 ...\n\n" +
    "의리란 놈은 이랬다 저랬다 하지 않지, 당신이 나와 결혼해주면 한 평생 남편으로서 의리를 지킬거요.",
    author: "만화 타짜, 고니가 화린에게"
  },
  {
    img: "https://t1.daumcdn.net/cfile/tistory/25731550544307EB34",
    author: "원피스, 포트거스 D 에이스"
  },
  {
    img: "https://t1.daumcdn.net/cfile/tistory/252B35495458846B1B",
    author: "원피스, 마샬 D 티치 검은수염"
  },

  {
    img: "http://img.lifestyler.co.kr/uploads/program/cheditor/2014/11/254T2TR4ZP8HSHTG8SJ2.jpg",
    author: "미생, 오상식 차장"
  },
  {
    img: "http://img.lifestyler.co.kr/uploads/program/cheditor/2014/11/QBH5RJZU3O1C3PWYPDQN.jpg",
    author: "미생, 장그레"
  },
  {
    img: "http://img.lifestyler.co.kr/uploads/program/cheditor/2014/11/P8ZBFERLIMMQZA7C8OWM.jpg",
    author: "미생, 장그레"
  },
  {
    img: "http://img.lifestyler.co.kr/uploads/program/cheditor/2014/11/FYQSNEANV891CYIM5RZZ.jpg",
    author: "미생, 장그레"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihdGssLOCcakFegIOT3-CKS7GUq6mPJ24k2vitv0KTODSi7neMA",
    author: "영화, 캐쉬백"
  },

  {
    author: "회사원",
    text: "퇴근 시간은 내 마음속에 있다",
    img : "https://redtea.kr/img/fri/6.jpg"
  },
  {
    author: "지각생",
    text: "늦었다 생각하면 진짜 늦었다"
  },
  {
    img: 'https://t1.daumcdn.net/cfile/tistory/216A3344560E951F17',
    text: '',
    author: '박명수',
  },
  {
    img: 'https://scontent-dfw5-2.cdninstagram.com/vp/6367c45ae0fa4fa830ded2d6b18b3c9a/5C55C1EA/t51.2885-15/e35/c242.0.596.596/42144783_476437782844605_784529268420526522_n.jpg',
    text: '',
    author: '박명수',
  }
];


class App extends Component {
  renderWords = () => {
    return (
      says.map((say) => (
        <div style={{maxWidth: 480}}>
          <Card className={classes.card} style={{borderRadius: 0, border: 0, boxShadow: 'none'}}>
            <CardMedia
              className={classes.cover}
              component={"img"}
              src={say.img}
            />
            <div className={classes.details}>
              <CardContent className={classes.content}>
                <h1 style={{whiteSpace:'pre-line', color:'rgba(20, 20, 20, 0.81)', fontSize: '1.8em', fontFamily:'Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important'}}>
                  {say.text}
                </h1>
                <Typography variant="subtitle1" color="textSecondary" style={{fontStyle: 'italic'}}>
                  <b style={{float: 'right'}}>by {say.author}</b>
                </Typography>
              </CardContent>
            </div>
          </Card>
          <div style={{background: 'white', height: 85}}>&nbsp;</div>
          {/*<div style={{background: 'rgba(251, 251, 251, 1)', height: 30}}>&nbsp;</div>*/}
        </div>
      ))
    );
  };

  render() {
    return <MuiThemeProvider>{this.renderWords()}</MuiThemeProvider>
  }
}
export default App;


