import './Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'SNS 플랫폼 (캡스톤 프로젝트)',
      description: '사용자가 게시물을 공유하고 소통할 수 있는 소셜 미디어 플랫폼. 실시간 알림, 댓글, 좋아요 기능 구현.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
      link: '#'
    },
    {
      id: 2,
      title: '학점 관리 시스템',
      description: '대학생들을 위한 학점 계산 및 성적 관리 웹 애플리케이션. 학기별 GPA 계산 및 통계 기능 포함.',
      tech: ['React', 'Python', 'Flask', 'MySQL'],
      link: '#'
    },
    {
      id: 3,
      title: '투두 리스트 + 캘린더',
      description: '할일 관리와 달력을 결합한 생산성 도구. 우선순위 설정, 반복 작업 기능 포함.',
      tech: ['React', 'JavaScript', 'LocalStorage', 'CSS'],
      link: '#'
    },
    {
      id: 4,
      title: '영화 추천 애플리케이션',
      description: 'TMDB API를 활용한 영화 검색 및 추천 서비스. 사용자 평가 및 위시리스트 기능.',
      tech: ['React', 'REST API', 'Axios', 'CSS Grid'],
      link: '#'
    },
    {
      id: 5,
      title: 'E-commerce 쇼핑몰',
      description: '상품 검색, 장바구니, 결제 기능을 포함한 온라인 쇼핑몰. 관리자 대시보드 포함.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      link: '#'
    },
    {
      id: 6,
      title: '실시간 채팅 애플리케이션',
      description: 'WebSocket을 활용한 실시간 1:1 채팅 및 그룹 채팅 시스템.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      link: '#'
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <h3>{project.title}</h3>
              <p className="description">{project.description}</p>
              <div className="tech-stack">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
