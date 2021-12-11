import classes from './banner.module.css';

const Banner = ({ btnText, clickHandler }) => {
	return (
		<div className={classes.container}>
			<h1 className={classes.title}>
				<span className={classes.title1}>Coffee Store</span>{' '}
				<span className={classes.finder}>Finder</span>
			</h1>
			<p className={classes.subTitle}>
				Find your local coffee shops and enjoy!
			</p>
			<div className={classes.buttonWrapper}>
				<button className={classes.button} onClick={clickHandler}>
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default Banner;
