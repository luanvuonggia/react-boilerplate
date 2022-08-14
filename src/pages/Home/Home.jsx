// import { useSWR } from 'hooks';
// import { getAPI } from 'utils';

// import Excel from 'components/Excel';
import './Home.scss';

const Home = () => (
  // const { data } = useSWR('https://jsonplaceholder.typicode.com/posts', url =>
  //   getAPI(url, { host: '' })
  // );
  <section className="home">
    {/* <Excel
        fileName="posts"
        data={[
          {
            columns: [
              {
                title: 'User Id',
                dataIndex: 'userId',
                width: 5,
              },
              {
                title: 'title',
                dataIndex: 'title',
                width: 20,
              },
              {
                title: 'Description',
                dataIndex: 'body',
                width: 50,
              },
            ],
            data,
            tabName: 'report',
          },
          {
            columns: [
              {
                title: 'User Id 1',
                dataIndex: 'userId',
                width: 5,
              },
              {
                title: 'title 1',
                dataIndex: 'title',
                width: 20,
              },
              {
                title: 'Description 1',
                dataIndex: 'body',
                width: 50,
              },
            ],
            data,
            tabName: 'report 1',
          },
        ]}
      >
        <button>export excel</button>
      </Excel> */}
    <dl>
      <dt>Introduce</dt>
      <dd>
        <div>- A starter kit for react project using Webpack 5.</div>
        <div>- Start your next react project in seconds.</div>
        <div>
          - A highly scalable, best DX and a focus on performance and best
          practices.
        </div>
      </dd>
      <dt>Quick start</dt>
      <dd>
        <div>
          1. Clone this repo using{' '}
          <div>
            <i>git clone GIT_REPO_URL YOUR_PROJECT_NAME</i>.
          </div>
        </div>
        <div>
          {' '}
          2. Move to the appropriate directory:{' '}
          <div>
            <i>cd YOUR_PROJECT_NAME.</i>
          </div>
        </div>
        <div>
          3. <i>pnpm.</i>
        </div>
        <div>
          4. <i>pnpm start --open</i> to open the default browser for the first
          time
          <div>
            {' '}
            <i>pnpm start</i> for the next time.
          </div>
        </div>
      </dd>
      <dt>Dependencies</dt>
      <dd>
        <div>- Git https://git-scm.com/downloads</div>
        <div>- NodeJS https://nodejs.org</div>
        <div>
          - PNPM: Run `pnpm start --open` to open the default browser for the
          first time and `pnpm start` for the next time.
        </div>{' '}
      </dd>
    </dl>
    <dl>
      <dt>Documentation</dt>
      <dd>
        <div>
          - <i>[Commands](docs/commands.md):</i> Getting the most out of this
          boilerplate.
        </div>
        <div>
          - <i>[Project structure](docs/project-structure.md):</i> Introduce
          project structrure.
        </div>
        <div>
          - <i>[Styles and Assets](docs/styles-assets.md):</i> How to work with
          the CSS tooling.
        </div>
        <div>
          - <i>[Using image](docs/images.md):</i> Support compress image with
          the webpack.
        </div>
        <div>
          - <i>[Notes](docs/notes.md):</i> Some notes for this boilerplate.
        </div>
        <div>
          - <i>[Vscode](docs/vscode.md):</i> Some vscode useful extensions.
        </div>
        <div>
          -{' '}
          <i>[Development workflow](docs/generals/development-workflow.md):</i>
          Development workflow.
        </div>
        <div>
          -{' '}
          <i>[HTML, CSS styleguides](docs/generals/html-css-styleguide.md):</i>
          HTML, CSS styleguides.
        </div>
        <div>
          - <i>[Javascript styleguides](docs/generals/js-styleguide.md):</i>
          Javascript styleguides.
        </div>
      </dd>
      <dt>Browsers</dt>
      <dd>
        <div>production: &gt;1%, not IE 11, not op_mini all, not dead </div>
        <div>
          development: last 1 chrome version, last 1 firefox version, last
          1safari version
        </div>
      </dd>
    </dl>
  </section>
);
export default Home;
