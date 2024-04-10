import style from './index.less'
import logo1 from '@/assets/logo1.png'
import ssb from '@/assets/ssb.png'
import dianhua from '@/assets/962840.jpg'
import ren from '@/assets/ren.png'
import logo from '@/assets/logo.png'
import {useState} from 'react'
import {
  Form,
  Input,
  Button,
  Space,
  Modal,
  Popup

} from 'antd-mobile'

export default function HomePage() {
  const onFinish = (values: any) => {
    return 
  }
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  return (
    <div className={style.home}>
        <div className={style.logo}>
          <img src={logo1} width={'50%'}/> 
        </div>
        <div className={style.retitle}>www.962840.com</div>
        <div className={style.title}>关于白市集</div>
        <p className={style.desc}>白市集筹备的初衷很纯朴,就是想把复杂的殡葬服务流程简单化。多年来接触殡葬行业,发现传统殡葬服务流程过于繁琐,且存在碎片化问题。对于缺乏专业知识的普通人来说,操办白事往往显得无从下手。</p>
        <p className={style.desc}>因此,白市集提出"<b>互联网+环保+殡葬</b>"的理念,旨在将分散的殡葬服务进行整合,构建一站式服务平台,为用户提供可自主选择、质量保证的白事服务菜单。同时,推广互联网殡葬环保理念,让人们体验便捷高效的新模式。更重要的是,希望通过不懈努力,改变大众对于传统观念和消费习惯的固有认知,为殡葬行业注入新的活力。</p>
        <div className={style.logo}>
          <img src={ssb} width={'55%'} style={{margin:'.5rem auto'}}/> 
        </div>
        <div className={style.title2}>下载“随申办”APP，搜索“公民身故一件事”在线办理。</div>
        <div className={style.box}>
          <h1>上海市民政局殡葬服务平台</h1>
          <div className={style.txt}>https://mzj.sh.gov.cn/binzang/index.html</div>
        </div>
        <div className={style.logo}>
          <img src={dianhua} width={'55%'} style={{margin:'.5rem auto'}}/> 
        </div>

        <div className={style.logo}>
          <img src={ren} width={'20%'} style={{margin:'.5rem auto 0'}}/> 
        </div>
        <div className={style.box1}>
          殡葬代理服务机构在线预约<br/>上海市殡葬代理服务单位<br/>自律诚信承诺书签约单位名单
        </div>
        <div className={style.logo}>
          <img src={logo} width={'80%'} style={{margin:'.5rem auto'}}/> 
        </div>
        <div className={style.list}>
          <dl>
            <dt>可能有帮助的</dt>
            <dd>白事便民服务热线962840</dd>
            <dd>上海市民办理参加海葬活动须知</dd>
            <dd>上海市各等级殡仪馆、公墓详细信息</dd>
          </dl>

          <dl>
            <dt>可能有帮助的</dt>
            <dd>白事便民服务热线962840</dd>
            <dd>上海市民办理参加海葬活动须知</dd>
            <dd>上海市各等级殡仪馆、公墓详细信息</dd>
          </dl>

          <dl>
            <dt>白事指南在线阅读</dt>
          </dl>

        </div>
        <div className={style.zhushou} onClick={() => setVisible1(true)}><b>您身边的<br/>白事助手</b></div>
        <div className={style.icp}>沪ICP备 20002985号 技术支持:新网数码</div>

        <Popup
          visible={visible1}
          onMaskClick={() => {
            setVisible1(false)
          }}
          bodyStyle={{ height: '40vh' }}
        >
          <div style={{ padding: '24px' }}>
            <div className={style.close} onClick={()=>{setVisible1(false)}}>关闭</div>
            <div className={style.formtitle}>请留下您的手机号和姓名，白事集将立刻联系您</div>
            <form method='post' action='mailto:info@962840.com' onSubmit={()=>{setVisible1(false)}}>
              <div className={style.line}><b>姓名：</b></div>
              <div className={style.line}><input type="text" name="name" maxLength={4} placeholder='请输入您的姓名'/></div>
              <div className={style.line}><b>手机号：</b></div>
              <div className={style.line}><input type="tel" name="tel" maxLength={11} placeholder='请输入您的手机号'/></div>
              <button className={style.submit} type="submit">确认</button>
            </form>
          </div>
        </Popup>
    </div>
  );
}


