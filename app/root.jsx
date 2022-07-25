import { json } from '@remix-run/node';
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react';

import tailwindStylesheetUrl from './styles/tailwind.css';
// import App1 from './old-app/App';
export const links = () => {
  return [{ rel: 'stylesheet', href: tailwindStylesheetUrl }];
};

export const meta = () => ({
  charset: 'utf-8',
  title: 'Chalupas',
  viewport: 'width=device-width,initial-scale=1'
});

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        Hello world!
        {/* <App /> */}
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
