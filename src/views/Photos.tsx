import React from "react";
import {Card, Image, Timeline} from 'antd';
import {ClockCircleOutlined} from "@ant-design/icons";
import {Collapse} from 'antd';
import "./Photos.css"

const {Panel} = Collapse;

export default class Photos extends React.Component<any, any> {
  render() {
    return (
      <div>
        <div className={"navBarBg"}/>
        <div className={"timeline"}>
          <Timeline mode="alternate">
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/4BED1F2B129BDA5C81DAA954238_CC2C4BE2_BC8FB.png"}/>
                    <Image src={"/assets/photos/A2F442F89327FF10A358FC93E2F_8D9FB22E_BEAC9.png"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>计算机科学与工程学院推进学科竞赛的各项工作</h3>} key="1">
                      <p
                        className={"paragraphText"}>7月24日，计算机科学与工程学院党委书记黎昂、院长陈敏率领学院党政办公室、学科竞赛各指导团队深入各个培训教室，查看湖南省程序设计竞赛、中国大学生计算机设计大赛、湖南省物联网大赛三个比赛留校学生的培训与学习情况，并听取了各教练团队关于学科竞赛情况的汇报，全面了解学科竞赛的赛事、教练团队、学生团队的现状。</p>
                      <p
                        className={"paragraphText"}>陈敏充分肯定了学科竞赛的过往成绩，并对今年上半年团体程序设计天梯赛取得的突破表示祝贺，希望各教练团队，戒骄戒躁，再接再厉，争取更多更好的竞赛成绩。随后，陈敏对学科竞赛工作做了三点安排，一是集中且严格管理；二是针对性培训和分类指导，营造良好学习氛围；三是做好培训实验室的安全用电工作。</p>
                      <p
                        className={"paragraphText"}>黎昂详细询问了培训学生的吃、住、学三方面的情况，强调暑假期间各学科竞赛团队要加强防疫防控，学生要注意食品安全和人身安全，努力学好专业知识，取得更好的竞赛成绩。</p>
                      <p className={"paragraphText"}>教练团队及留校学生倍受鼓舞，表示将严格遵守暑期培训各项规定，按培训计划开展教与学的各项活动，力争取得更好的成绩为校增光。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/D90C51D0DA97897BB767760DAC3_85AEEC03_114D1.jpg"}/>
                    <Image src={"/assets/photos/1FA1F944992F54C1098B035D575_22FC280D_D34E.jpg"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>计信学院省程序设计竞赛团队举行暑假集训启动大会</h3>} key="1">
                      <p
                        className={"paragraphText"}>为了备战2021年省程序设计竞赛，7月19日上午学院省程序设计竞赛团队在信息楼大会议室举行了暑假集训启动大会，学院副院长任长安、教练团队戴成秋、曹水莲、叶一帆、胡龙志、周瑞玲及竞赛团队同学参加了会议。</p>
                      <p
                        className={"paragraphText"}>会上介绍了今年省程序设计竞赛的安排，教练工作任务的安排、学生训练时间安排及管理制度。要求所有学生每天按时到达集训教室进行学习，特别强调疫情控制管理，学生在训练期间不得外出，除非生病不得请假。各个小组的教练分别介绍了集训的了内容、时间安排、学习要求。</p>
                      <p
                        className={"paragraphText"}>任长安指出，参加集训不仅是为了参加比赛，它更是一个提升自己专业技能的机会，同学们要好好把握此学习机会，为将来的就业打下坚实的基础。要求学生听从教练安排，遵守团队管理纪律，增强安全意识，要求教练要认真负责搞好教学指导及人员管理工作，争取取得优异成绩。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/81C20B3E41C2007838BCB4C8152_A10788A0_E099B.png"}/>
                  <Collapse ghost>
                    <Panel showArrow={false}
                           header={<h3 className={"header-2"}>我校在“2021中国高校计算机大赛-团体程序设计天梯赛”中取得五项突破</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>在2021年4月24日举行的“2021中国高校计算机大赛-团体程序设计天梯赛”
                        中，我校派出3支队伍共30位学生与来自全国包括北京大学、浙江大学、国防科大、中南大学等347所高校1100支队伍共10946学生同台竞技。近日，最终成绩揭榜，我校取得湖南省高校总榜第7名，全国第149名的历史最佳成绩。相比往年，实现了“五项突破”，其一是首获湖南省高校三等奖；其二是首次拿下全国团队三等奖；其三是胡梦泽、罗洪2名同学斩获全国个人银奖；其四是头一回拿湖南省团队二等奖；其五是获奖数量的突破，共获得4项集体奖，8项个人奖，在同类院校中名列前茅。</p>
                      <p
                        className={"paragraphText"}>“中国高校计算机大赛-团体程序设计天梯赛”是由教育部高等学校计算机类专业教学等指导委员会和全国高等学校计算机教育研究会联合主办的竞赛，位列“2020全国普通高校学科竞赛排行榜”第29名。大赛比拼的是30位同学的编程总得分，拼的是各校学生的综合程序设计能力；大赛采用了严密的监考程序，若学生有任何作弊行为，全校成绩清零，并即时公示榜单，号称最严格、最公平的竞赛。</p>
                      <p
                        className={"paragraphText"}>计信学院师生认真学习贯彻学校第三次党代会精神，以党史学习教育为契机，以落实“四个一百”为目标，同心协力，努力学习和工作。赛前，联系学院校党委委员刘龙昌副校长寄望取得好的成绩，向建党100周年献礼。计信学院坚持以赛促学，以赛促教的方式培养了大批优秀新工科人才，促进了教风学风建设。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/9CA905C9B8567D2CC95B768C8CA_13616E80_3C212.png"}/>
                    <Image src={"/assets/photos/1D4A0A70FFE615D8937C624759D_5A3A1C21_5C722.png"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>计算机与信息科学学院成功承办全国第十二届蓝桥杯大赛省赛</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>4月18日，全国第十二届蓝桥杯全国软件和信息技术专业人才大赛省赛由计算机与信息科学学院成功承办，来自湖南工学院、衡阳师范学院及湖南环境生物职业技术学院的88名优秀选手在本校赛点进行了激烈角逐。</p>
                      <p
                        className={"paragraphText"}>蓝桥杯大赛是由工业和信息化部人才交流中心主办，蝉联入围中国高等教育学会发布的“2020年全国普通高校学科竞赛排行榜”，是评价高校教育教学改革和创新人才培养的重要竞赛项目。</p>
                      <p
                        className={"paragraphText"}>计算机与信息科学学院为培养学生扎实的专业技术能力和解决问题的思维能力，为促进学院学科建设和专业建设的发展，非常重视此项比赛。学院秉承“以赛促教，以赛促学”的理念，认真制定并严格执行了集训计划和方案，积极组织校内选拔赛，选拔50名优秀学生参加了此次比赛。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
              2021年
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/C521FA54722512088C6F7F2BC0F_01FAC5E2_766B.jpg"}/>
                    <Image src={"/assets/photos/D80E8F29335F2C45CF18A859F83_CC8E1812_BEB6.jpg"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我校学子在第四届湖南省大学生物联网应用创新设计竞赛中再创佳绩</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>11月14-15日在湖南工商大学举办的2020年（第四届）湖南省大学生物联网应用创新设计大赛完美落幕。本次比赛是由湖南省教育厅主办，湖南省物联网学会协办，湖南工商大学承办。来自国防科技大学、中南大学、湖南大学等四十多所高校参加了本届比赛。</p>
                      <p
                        className={"paragraphText"}>我校计算机与信息科学学院的学子们组成三支队伍参加了本届赛事，经过紧张激烈的角逐，参赛队员荣获二等奖1项、三等奖2项。其中，物联1802班胡超、物联1801班邱柏伦、信息1801班梁籽翱组成的技能赛1队喜获二等奖，指导老师为曾利军、常赟杰。物联1801班谭桂霖、物联1801班许湘南、信息1802班杨鑫鹏组成的技能赛2队荣获三等奖，指导老师为陈纪铭、常赟杰。物联1701班聂澳威、物联1701班张宁、信息1801班杨磊稳组成的创意赛1队荣获三等奖，指导老师为常赟杰、曾利军。</p>
                      <p
                        className={"paragraphText"}>本届赛事是计算机与信息科学学院连续第三年组队参赛并荣获奖项。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/86A12D742DF9A95EE089BE093D6_BF2CF2F3_1A0DF.jpg"}/>
                    <Image src={"/assets/photos/D7091A7827931D1CE17D73F923F_46AA90DA_23FBD.jpg"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我校学生在2020湖南省大学生程序设计竞赛中获奖</h3>} key="1">
                      <p
                        className={"paragraphText"}>2020年10月18日，由湖南省教育厅举办，湖南省高教学会计算机教育专业委员会协办，长沙理工大学承办的第16届“强智杯”湖南省大学生计算机程序设计竞赛在长沙理工大学云塘校区举行，我校学生与中南大学、湖南大学、国防科技大学、湘潭大学等全省37所高校学生队伍同台竞技，
                        在本次赛事中取得二等奖一项、三等奖一项。</p>
                      <p
                        className={"paragraphText"}>二等奖获奖学生为计科1803姜瑜亮、计科1802罗洪、物联网1802李龙涛，指导老师曹水莲；三等奖获奖学生为网络1803喻鑫昊、网络1803郑红波、网络1803欧阳志，指导老师罗庆云、罗丹霞。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
              2020年
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/FDCBBBB363FDEB0EE5D46211FD0_CEF66098_42951.jpg"}/>
                    <Image src={"/assets/photos/C2F473B87C7DAE0B59FBC72A387_AB3814C7_15876.jpg"}/>
                  </div>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/670EC510F3A34D26AE880113278_35D5966E_13F59.jpg"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>湖南工学院第六届程序设计大赛初赛取得圆满成功</h3>} key="1">
                      <p
                        className={"paragraphText"}>计信学院的ACM团队是计信学院专业性最强的学科竞赛的团队，依托程序设计竞赛，旨在培养大学生创新能力、团队精神和在压力下编写程序、分析和解决问题的能力，每年通过校赛选拨广大爱好计算机编程的IT届希望之星进入这个团队。学院连续5年举行了程序设计大赛初赛，5年来参加过ACM队培训课程的各专业学生累计达300余人。通过教练指导，老队员的带动、组织讲座、暑假集训、交流和比赛，队员们的编程能力、英语水平、自主学习能力、创新能力、团队协作以及与人交流的能力都有了大幅度的提高，同时，面对生活、面对成败也有了更积极的态度。ACM团队成员每年参加湖南省程序设计大赛都取得了非常好的成绩，为学院培养了一批批专业性强的优秀学生。</p>
                      <p
                        className={"paragraphText"}>今年的比赛于11月9日上午九点在2514举行，由ACM教练叶一帆出题，教练曹水莲及本届ACM队长姜瑜亮、副队长李龙涛负责组织。共有80多名学生报名，经过老队员一个月的培训，最后有的学生因难度太大而放弃了比赛，最终58名选手参加比赛，主要为计信学院的学生，但此次还吸引了来自材化学院和电信学院的大一学生参赛。</p>
                      <p
                        className={"paragraphText"}>在长达5小时的比赛过程中，选手激烈竞争，榜首发生过多次变动，排名中间的选手更是不愿排在后面，哪怕很长时间没有做出一个题也尽力在那思考没有放弃，纷纷拼尽全力，往前赶超。最终部分的同学完成了三个题，大多数同学完成了至少一个题，前三更是完成了六个题以上。计科1902郑源昕，计科1903徐浩，物联1901严相荣取得大一前三名。本次程序设计大赛考验了大一新生入学以来的自学能力以及学习情况汇总，也意在发现对程序设计感兴趣的新生，最后根据比赛结果选拔了30名优胜学生成为正式的ACM队员，给ACM团队注入了新鲜血液，希望他们在将来的学习中能取得更好的成绩。(计信学院ACM团队)</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/A5DEECE6EA85C044A3EB031CFDB_EFD676BB_10B2C.jpg"}/>
                    <Image src={"/assets/photos/743BF79218C20DD612EDCEF1B85_EEC25EC2_1AAC8.jpg"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>计信学院举行学科竞赛颁奖典礼暨2019级专业教育活动</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>10月17日计信学院在学校五百人多功能报告厅举行了“计信学院学科竞赛颁奖典礼暨2019级专业教育活动”，教务处处长何建雄、计信学院院长罗庆云、党委书记李立波、计信学院领导班子其他成员、学科竞赛组教练及学生、2019级全体新生参加了颁奖典礼。</p>
                      <p
                        className={"paragraphText"}>会上学院副院长任长安介绍了计信学院的学科赛事及参赛意义，ACM团队教练曹水莲总结了2019年计信学院学生参加的学科竞赛及获奖情况，参会领导对各个获奖团队及个人进行了颁奖。教务处处长何建雄在大会上就我校是如何围绕“三重一高”、“服务教学中心地位”、“学生中心理念”开展本科教育，实施人才培养工作做了详细的描述，并指出学校在学科竞赛方面要将会加强奖励力度，鼓励在校生学好专业知识多参加学科竞赛。学院院长罗庆云在大会上发言肯定了学院学生的努力与教练团队的工作，并对2019级新生进行了专业教育，指导学生要做到”重理论、强实践；先做人、后做事；先就业、再择业；先稳定、后发展”。最后各个竞赛团队教练逐一介绍了团队的培训内容、管理机制及招新要求。</p>
                      <p
                        className={"paragraphText"}>计信学院根据湖南工学院《2020本科教学工作审核评估工作要求》以及《本科教学工作审核评估第一阶段评建任务检查情况反馈》情况要求，为了更好概括与提炼特色与亮点，特举行了此次活动，旨在总结学科竞赛成果、凝练学科竞赛特色、同时对2019级新生开展专业教育，激励在校生精钻专业知识，积极参加学科竞赛。学院近年来高度重视学生学科和技能竞赛，也在不断完善竞赛激励和保障机制，营造了良好的竞赛氛围。通过竞赛的方式提升了学生程序设计与开发能力，特别是运用专业学科知识进行创意设计和创新实践的能力，实现以赛促学、以赛促教、以赛促用，推动学院人才培养和产学研转化，提高了学院的教学质量，提升了教师的教学水平，扩大了学校的知名度。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/74C83330C8F6C7E9A12E6A94B2C_4D2A2592_16689.jpg"}/>
                    <Image src={"/assets/photos/FD16984AC5157B11C8381456701_0154660C_17056.jpg"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我校在2019年湖南省程序设计大赛中喜获佳绩</h3>} key="1">
                      <p
                        className={"paragraphText"}>8月29至30日第15届“强智杯”湖南省大学生计算机程序设计竞赛在湖南师范大学成功举办，我校计信学院派出的学生代表队在大赛中取得优异成绩，共获得二等奖2项、三等奖3项。</p>
                      <p
                        className={"paragraphText"}>湖南省大学生计算机程序设计竞赛是由湖南省教育厅主办，湖南省高教学会计算机教育专业委员会协办，面向普通本专科在校学生开展的大学生学科竞赛活动，大赛分ACM程序设计、应用开发和机器人高尔夫三大类竞赛。</p>
                      <p
                        className={"paragraphText"}>本届赛事共有湖南省38所本科院校参与，包括来自中南大学、国防科大、湖南大学、湖南师范大学、湘潭大学、湖南工商大学、长沙理工大学、吉首大学、南华大学等近千名选手，200多支队伍，规模宏大、竞争激烈。我校共派出8支学生队伍参赛，经过激烈角逐，共获得5个集体奖项，具体获奖情况为：ACM程序设计类：杨宗霖、李紫薇、孙殊睿组获二等奖，曹赛衍、吴斌、李智谦组获三等奖，应用开发类裴顺仕、常玉缘、卢宁宁组获二等奖，黄大林、罗世鑫、李鑫组获三等奖，机器人高尔夫类郭雄，杜孟锦、何祖宏组获三等奖。</p>
                      <p
                        className={"paragraphText"}>计信学院领导非常重视此项比赛，院领导罗庆云、任长安亲自带队，组建了任长安、戴成秋、叶一帆、曹水莲等教师的教练团队，制定了严格的培训计划，通过平时周末与晚上的培训及暑假的集训，培养了一批优秀的学生，尤其是机器人高尔夫类第一次参赛就获得了三等奖，可见学生和老师的努力。今后学院将以竞赛为平台，不断深化计算机教学改革，强化学生实践能力的培养和训练，全面提高学院人才培养质量。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <div className={"picRow"}>
                    <Image src={"/assets/photos/5A9EDAAB154EE12A0D07F7E4454_CD2681C0_D6E54.png"}/>
                    <Image src={"/assets/photos/2731D5968C79DFF3D387D965832_A2C4F69A_AD816.png"}/>
                  </div>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>计信学院任长安老师举办“ACM竞赛策略及分析”知识讲座</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>2019年6月29日晚上，计算机与信息科学学院副院长、ACM竞赛队总教练任长安老师在信息楼2113举行了《ACM程序设计竞赛策略及分析》知识讲座。计信学院全体ACM队员及有兴趣的部分学生聆听了此次报告。</p>
                      <p
                        className={"paragraphText"}>任长安老师首先简单介绍了目前ACM全世界、全国及湖南的所有赛事及计信学院目前获得的一些重量级的奖项，然后重点从竞赛策略上展开了相关分析，主要包括以下几个方面：竞赛的题型、竞赛的准备、分工问题、算法的选择、程序的编写、调试中存在的问题、竞赛中的杂题处理等。最后，任老师强调，学习编程并不是为了参加竞赛，竞赛对于多数选手的意义还是在于参与，以及在备战过程中对自己的锻炼和提高。</p>
                      <p className={"paragraphText"}>本次讲座，不仅为在座的学生上了一堂扎扎实实的专业教育课，而且也为很多同学在计算机类的专业学习上指明了前进的方向。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/2CF28D220F4FF1AEE0B77AFDBAB_80C76A2C_191B2.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我院学生参加2019中国大学生程序设计竞赛女生专场赛斩获铜奖</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>6月2日，由教育部高等教育计算机类教学指导委员会主办、南京晓庄学院承办的2019中国大学生程序设计竞赛女生专场在南京晓庄学院方山校区举行。我校选派了1支由李紫薇、孙姝睿、黄昕琪组成的女生代表队参赛，和来自清华大学、上海交通大学、南京大学、东南大学等国内96个高校的155支参赛队伍同场竞技，经过激烈角逐，获得铜奖。</p>
                      <p className={"paragraphText"}>为了纪念程序员鼻祖Ada
                        Lovelace女士，营造社会关怀重视女性程序员的环境，中国大学生程序设计竞赛自2016年起设置了女生专场比赛。比赛时长为5个小时，3位女生组成一个参赛队，需要使用一台电脑编程解决10道以上的复杂工程问题。此届比赛清华大学代表队、福州大学代表队、上海交通大学代表队分别获得冠亚季军，我校学生能在面对如此强的对手比赛中获得铜奖说明我校学生实力非常强，为学校增了光，提高了学校的知名度。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/4F46306A97DDDBDCF43A100E6ED_E95D2488_23FF1.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我院学生在2019 ICPC中国邀请赛获得晋级资格</h3>} key="1">
                      <p className={"paragraphText"}>6月1日下午，由江西师范大学承办的2019
                        ICPC中国邀请赛（南昌）暨国际丝绸之路程序设计竞赛在瑶湖体育馆成功举行，美国德州州立大学资深教授、ICPC亚洲区委员会主席黄金雄，副校长陈运平，台湾ICPC暨鉴定学会常务理事彭胜龙，中国大学生程序设计竞赛教练协会常务理事、ICPC东亚区负责人、西北工业大学姜学锋，宁夏理工学院副校长、哈尔滨工程大学教授、ICPC亚洲训练联盟联络官俞经善等出席开幕式。我校选派出了一支由吴斌、曹赛衍、杨宗霖三名同学组成的队伍参加本次比赛，与来自中国人民大学、国防科技大学和北京航空航天大学等的全国各地的千余名选手进行了激烈的角逐后，我校参赛队伍荣获晋级资格。</p>
                      <p className={"paragraphText"}>ACM国际大学生程序设计竞赛（英文全称：ACM International Collegiate Programming
                        Contest（简称ACM-ICPC或ICPC））是由国际计算机协会（ACM）主办的，一项旨在展示大学生创新能力、团队精神和在压力下编写程序、分析和解决问题能力的年度竞赛。经过近40年的发展，ACM国际大学生程序设计竞赛已经发展成为全球最具影响力的大学生程序设计竞赛。</p>
                      <p
                        className={"paragraphText"}>赛事由各大洲区域预赛和全球总决赛两个阶段组成。决赛安排在每年的3-5月举行，而区域预赛一般安排在上一年的9-12月举行。原则上一个大学在一站区域预赛最多可以有3支队伍，但只能有一支队伍参加全球总决赛。而我校队伍在此次的区域赛预选赛中获得了晋级资格，这意味着我校学生将有机会代表我校登上这个大舞台争得荣誉，为我校争光。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/1AD613019FA543DD190F132FD7D_CE792D00_1CA98.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false}
                           header={<h3 className={"header-2"}>计信学院学生在第十届“蓝桥杯”全国软件专业人才设计与创业大赛中取得辉煌成绩</h3>} key="1">
                      <p
                        className={"paragraphText"}>5月26日，我校计信学院派出4名学生在北大举行的第十届蓝桥杯全国软件和信息技术专业人才国赛个人软件类比赛中，和来自北京大学、清华大学、上海交通大学、四川大学、东北大学等全国31个省自治区1200多所学校，近6000名顶尖选手展开激烈的角逐，最终取得辉煌成绩，共获得国家级一等奖1项、二等奖2项、三等奖1项，取得历史性的突破。其中姜瑜亮获一等奖，曹赛衍、杨宗霖获二等奖，李紫薇获三等奖。</p>
                      <p
                        className={"paragraphText"}>蓝桥杯大赛，是由工业和信息化部人才交流中心主办的全国性高校IT类专业赛事，我校已连续5次组团参赛，比赛分为省赛和国赛，在3月31日举行的省赛中，我校33名学生参赛，获得了省级一等奖2项、二等奖6项、三等奖11项。</p>
                      <p
                        className={"paragraphText"}>湖南工学院近年来高度重视大学生学科和技能竞赛，也在不断完善竞赛的激励和保障机制，鼓励和引导大学生积极参加，为大学生营造了很好的竞赛氛围。为了备战此次大赛，计算机与信息科学学院领导班子高度重视，由罗庆云院长亲自带队，组建了由任长安、赵巾帼、曹水莲、黄银珍、叶一帆等教师的教练团队，制定了详细的竞赛工作计划，积极组织选拔、培训工作。另外，计信学院已第四次成功承办了省赛赛点，本届省赛共接纳了衡阳地区南华大学、衡阳师范学院、湖南环境生物工程学院的考生128名。</p>
                      <p
                        className={"paragraphText"}>我校学生在学科竞赛活动中取得的优异成绩，提高了我校在社会上的知名度，激发了学生的学习积极性，达到以赛促学的效果，提高了学校的教学质量，扩展了教师的知识面，提升了教师的教学水平。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/EC3B67C1A0FB6E4E9D7033A9797_9A25BE07_20B97.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false}
                           header={<h3 className={"header-2"}>我校学子在2019“鑫大周无人船杯”中国大学生程序设计竞赛全国邀请赛（湖南）中喜获佳绩</h3>} key="1">
                      <p
                        className={"paragraphText"}>中国大学生程序设计竞赛是由教育部高等学校计算机类专业教学指导委员会主力，中国大学生程序设计竞赛组委会承办的一项面向全国大学生的程序设计竞赛，旨在加强中国大学在计算机教育教学领域的交流，提高大学生的程序设计、计算机思维和计算机系统能力，提供一个公平的竞赛平台，便于工业界和教育界选拔更优秀的人才，2019年中国大学生程序设计竞赛全国邀请赛（湖南）是其体系下的一项面向全国大学生的邀请赛，由湘潭大学信息工程学院、湘潭市计算机学会承办。</p>
                      <p
                        className={"paragraphText"}>大赛于5月11日到－12日在湘潭大学举行。本次比赛有来自北京交通大学，北京理工大学，华中科技大学，北京邮电大学，湖南大学等80多个高校的202支队伍参赛。我校派出两支队伍参赛，经过激烈的比赛，其中由李紫薇、杨宗霖、孙姝睿组成的队伍喜获铜奖，由曹赛衍、吴斌、姜瑜亮组成的队伍荣获优胜奖。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/5FF51B8237D23FA80723FF1ABD9_B0376A2D_E2179.png"}/>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>任长安老师开展ACM程序设计竞赛教学公开课活动</h3>} key="1">
                      <p
                        className={"paragraphText"}>2019年5月9日下午，计算机与信息科学学院副院长任长安老师在信息楼2504录播室举行了《ACM程序设计竞赛模式》公开活动。计信学院全体没课的老师及部分ACM队员参与了此次公开课活动。</p>
                      <p
                        className={"paragraphText"}>公开课上，任长安老师首先从近几年学院学生参加ACM情况入手，详细描述了ACM的概念、竞赛的模式及主要的知识点；而后又从C语言程序设计、Java程序设计、C++程序设计入手，阐释了ACM学科竞赛对于程序设计类课程的促进与关联性；最后，总结了开展学科竞赛与教师们开展程序设计类教学改革的重要意义。</p>
                      <p className={"paragraphText"}>本次公开课，不仅为在座的学生指明了方向，也拓宽了学院教师的教学改革思路，教学效果得到了参与此次活动的教师和学生一致好评。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/FBEA93749983812FFF31853F641_092D3A61_20C1C.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我校在2019年中国高校团体程序设计天梯赛中获得佳绩</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>2019年3月30日，由教育部高等学校计算机类专业教学指导委员会、软件工程专业教学指导委员会、大学计算机课程教学指导委员会、全国高等学校计算机教育研究会主办的中国高校计算机大赛（CCCC）团体程序设计天梯赛决赛在全国39个赛点同时举行。在学院的大力支持下，由20名ACM集训队队员组成的2支队伍参加了本次比赛，与来自284所高校的775支队伍同台竞技，最终一支队伍获得湖南省三等奖。</p>
                      <p
                        className={"paragraphText"}>中国高校计算机大赛-团体程序设计天梯赛（简称：GPLT）是国内首个由教育部计算机领域的三个教指委和全国高等学校计算机教育研究会联合主办的高水平计算机类竞赛，是一项规格高、影响广、参赛人数众多的比赛。该竞赛旨在推进程序设计能力的培养，同时培养学生的团队合作精神，提高其综合素质，丰富校园学术气氛，促进校际交流，提高全国高校程序设计教学水平。本次大赛采用个人比赛、组队计分的模式，对于选手的个人能力和高校程序设计人才的储备都是极大的考验。我校在相对弱校生源的情况学生能在此平台获得三等奖证明了学生的努力和教练的付出，为学校争得了荣誉，希望明年能取得更好的成绩。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
              2019年
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/3AB7ED8182AAE78BA61025EF08C_4FF00592_222A0.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>计信学院任长安老师举办“ACM知识”专题讲座</h3>} key="1">
                      <p
                        className={"paragraphText"}>10月12日晚上，我院教师任长安在安工楼5601做了一堂“ACM知识”专题讲座，计信学院部分教师及学院80多名学生聆听了本次讲座。</p>
                      <p
                        className={"paragraphText"}>讲座会上，任长安老师分享了其近10年来从事ACM工作的体会，并从以下四个方面详细介绍了ACM的相关知识：什么是ACM？如何学习ACM相关知识？可以参加哪些比赛？如何制定训练计划？任老师的讲座深入浅出、幽默生动，引起了在座的一片片掌声。</p>
                      <p className={"paragraphText"}>本次专题讲座，不仅为我院对程序设计竞赛有兴趣的学生指明了方向，也为我院的学风和教风起到了积极的宣传和推动的作用。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item>
              <Card hoverable>
                <div className={"cardContent"}>
                  <Image src={"/assets/photos/4C6F7682E465DDB420AD1EEE3C1_3A90A0F2_B8CB.jpg"}/>
                  <Collapse ghost>
                    <Panel showArrow={false} header={<h3 className={"header-2"}>我校在第十四届湖南省大学生ACM程序设计竞赛中获佳绩</h3>}
                           key="1">
                      <p
                        className={"paragraphText"}>9月2日，由湖南省教育厅主办、湖南省高教学会计算机教育专业委员会协办的第十四届湖南省大学生ACM程序设计竞赛在湖南农业大学举行，我校代表队由计算机与信息科学学院院长罗庆云领队，任长安、赵巾帼、曹水莲、黄银珍四位老师担任教练，喜获一个二等奖和两个三等奖，在全省36所本科院校中综合排名第20位。</p>
                      <p
                        className={"paragraphText"}>据悉，ACM程序设计大赛是大学级别最高的脑力竞赛，素来被冠以“程序设计的奥林匹克”，全省包括国防科技大学、中南大学、湖南大学、湘潭大学、长沙理工大学等在内的38所院校参加了此次大赛。</p>
                    </Panel>
                  </Collapse>
                </div>
              </Card>
            </Timeline.Item>
            <Timeline.Item dot={<ClockCircleOutlined style={{fontSize: '16px'}}/>}>
              2018年
            </Timeline.Item>
          </Timeline>
        </div>
      </div>
    )
  }
}