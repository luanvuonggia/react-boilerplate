import './About.scss';

const members = [
  {
    name: 'Linh Tran',
    email: 'linhtran@example.net',
  },
  {
    name: 'Hoang Nguyen',
    email: 'hoangnguyen@example.net',
  },
  {
    name: 'Nhi Thai',
    email: 'nhithai@example.net',
  },
  {
    name: 'Dung Nguyen',
    email: 'dungnguyen@example.net',
  },
  {
    name: 'Liem Do',
    email: 'liemdo@example.net',
  },
  {
    name: 'Duy Phan',
    email: 'duyphan@example.net',
  },
  {
    name: 'Diem Nguyen',
    email: 'diemnguyen@example.net',
  },
  {
    name: 'Luan Vuong',
    email: 'luanvuong@example.net',
  },
  {
    name: 'Tu Bui',
    email: 'tubui@example.net',
  },
  {
    name: 'Khoa Vuong',
    email: 'khoavuong@example.net',
  },
  {
    name: 'Duc Vuong',
    email: 'ducvuong@example.net',
  },
  {
    name: 'Trang Cao',
    email: 'trangcao@example.net',
  },
  {
    name: 'Quang Ly',
    email: 'quangly@example.net',
  },
  {
    name: 'Tien Nguyen',
    email: 'tiennguyen@example.net',
  },
  {
    name: 'Quang Dang',
    email: 'quangdang@example.net',
  },
];
const About = () => (
  <div className="About">
    <div className="about-section">
      <h1>About Us Page</h1>
      <p>Some text about who we are and what we do.</p>
      <p>
        Resize the browser window to see that this page is responsive by the
        way.
      </p>
    </div>

    <h2 style={{ textAlign: 'center' }}>Our Team</h2>
    <div className="row">
      {members.map(({ name, email }) => (
        <div className="column" key={name}>
          <div className="card">
            <div className="container">
              <h2>{name}</h2>
              <p className="title">Front End Developer</p>
              <p>{email}</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default About;
