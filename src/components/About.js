import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              안녕하세요! 저는 동양미래대학교 컴퓨터공학과 4학년 재학 중인 주영혁입니다.
              웹 개발과 소프트웨어 엔지니어링에 관심이 있으며, 사용자 경험을 최우선으로 하는
              효율적이고 확장 가능한 애플리케이션을 개발하려고 노력하고 있습니다.
            </p>
            <p>
              대학교육을 통해 자료구조, 알고리즘, 데이터베이스, 네트워크 등
              컴퓨터과학의 기초를 학습했으며, 다양한 프로젝트를 통해
              실무 경험을 쌓고 있습니다.
            </p>
            <p>
              새로운 기술에 빠르게 적응하고, 팀 프로젝트에서 협업을 중시하는 개발자입니다.
            </p>
          </div>
          <div className="skills">
            <h3>Technical Skills</h3>
            <div className="skill-list">
              <span className="skill-tag">React</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">Git</span>
              <span className="skill-tag">HTML/CSS</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
