import { useLayoutEffect } from 'react';
import scss from './Form.module.scss';

const Form = () => {
	useLayoutEffect(() => {
		(function (w: Window, d: Document, e: string, u: string, f: string, l?: HTMLScriptElement, n?: Element | null) {
			(w as any)[f] =
				(w as any)[f] ||
				function (...args: unknown[]) {
					(w as any)[f].q = (w as any)[f].q || [];
					(w as any)[f].q.push(args);
				};

			l = d.createElement(e) as HTMLScriptElement;
			l.async = true;
			l.src = u;
			n = d.getElementsByTagName(e)[0];
			if (n && n.parentNode) {
				n.parentNode.insertBefore(l, n);
			}
		})(window, document, 'script', 'https://assets.mailerlite.com/js/universal.js', 'ml');
		(window as any).ml('account', '1144649');
	}, []);

	return (
		<div className={scss.form}>
			<div className='ml-embedded form' data-form='gVUj3w'></div>
		</div>
	);
};

export { Form };
