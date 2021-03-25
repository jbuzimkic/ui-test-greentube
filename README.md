# ui-test-greentube

Web application developer for the purpose of being a informative web application for desired products.

Developed with Atom and Prepros.
Developed in HTML, SASS (CSS) and JS.

### 1. Angular Test questions and answers

### General:
	1. What is a reducer function?
	2. If you have a slow website. Suggest some things to check and improve.
		a. Check the state of the server that the web application is being served on
		b. Check if we have any duplicated code and/or files and unused code and/or files
		c. Check and compress used images and/or videos without loosing the quality
		d. Check if some of the requests to backend/database is taking to long to execute
		e. Check if JS and/or CSS files are minified
    f. Check if execution of functions is taking too long
	3. What can you do if you need an HTML5 feature that is not available in some browsers (Example in IE 9)
      a. Dynamically creating elements with document.createElement function
      b. Adding <!DOCTYPE html> tag
      c. Using Polyfills
	4. Mention some SEO optimizations for a home page
		a. Adding HTML meta tags, for example description
		b. Adding title HTML element
            b.1 Should not be too long
		c. Adding alt tags to images
		d. Improving the speed of the application
    e. Including keywords
    f. Adding headers that will benefit SEO
    g. Company logo as a favicon icon
	5. What is the difference between AMD, UMD and Common.JS
	6. What is HTML5 push state? Which problem does it solve?
      a. It adds an entry to the browser's history and it solves the problem with users clicking the back button. For example we have a single page application which main functionality is to display search and fetched records. The user executes two-three search actions and he wants to go back to the previous one without typing again in the search form the values.
	7. How do you implement "overload" of functions in Typescript?
      a. Overload of functions is when we have more then one function with the same name but they all take different number of parameters. The last function that has all parameters defined should have if statements that check if the received arguments are null or not. Depending on the received arguments the function will execute different parts of code or maybe similar if some of the arguments are not required (for example update user.  
	8. How do you detect a touch device?
		a. With the following function. The function returns the number of simultaneous touch contact points that are supported by the correct device. Both of the functions are part of the Navigator interface.
			function isTouchDevice() {
			    return ( 'ontouchstart' in window ) ||  
			           ( navigator.maxTouchPoints > 0 ) ||  
			           ( navigator.msMaxTouchPoints > 0 );
			}


### Tooling and task runners
	1. Which would you choose as task automation: Gulp, Gunt, Npm? Why?
		a. I have only worked with npm.
	2. What is Docker or Vargant? Why do we need them?
		a. Docker is a tool made to simplify the process of creating, deploying and running applications by using containers. The primary goal is to package applications in containers, allowing them to be portable among any system running the Linux OS. Dockers simplify development, deployment of applications and management of servers.
	3. How do you implement pre and post hooks in NPM package.json
		"predocker:publish":"echo Attention" Ensure docker login is correct."
		"docker:publish":"cross-conf-env docker image push $npm_package_config_imageRepo/$npm_package_config_imageName:$npm_package_config_imageVersion"
		"postdocker:publish":"echo Image pushed successfully!"


 ### CSS/Design
	1. Does the browser match the CSS selectors from left to right or right to left?
		a. Right to left
	2. If you are using Sass and you have a file with all colors "colors.scss", how can you prevent this colors file to be included in every other SASS files. Hint "colors.scss" should be a partial.
		a. With the help of @use rule
	3. What is Atomic design?
		a. Atomic design is based on atoms as basic building blocks. If it is applied to web interface, then HTML elements are considered to be atoms. It has 5 building blocks
			i. Atoms
			ii. Molecules
			iii. Organisms
			iv. Templates
			v. Pages
		c. For example if we have a login page with a header and footer. The whole login page deign is considered to be one page. If we take out the context from that page (text, images) then we get a template. That template can be sectioned into 3 organisms: header, main ( with the login form) and footer. In the main part we have molecules: login form, header of the page and some informative text. In the login form we have atoms. Labels, input fields and buttons are considered atoms.

### Angular 8+
	1. What is the difference between a Component and a Directive in Angular 2?
		a. Directives are a mechanism by which we can attach behavior to elements. They can be grouped in structural, attribute, component and custom directives. Component are type of directives and are based on template oriented features. They are used for creating templates or views which are later used for displaying desired data. One component contains of one HTML, CSS and TS file.  
		b. Components:
			i. Only one component can be instantiated for a given element in a template
			ii. To register component @Component meta-dana annotation is used
			iii. It is a directive which use shadow DOM to create encapsulate visual behavior. They are mostly used to create UI views and templates
			iv. It is used to break the application into smaller sections/parts
			v. View or templateutl template are mandatory
		c. Directives:
			i. More then one directives can be instantiated for a given element in a template
			ii. To register directives @Directive meta-dana annotation is used
			iii. It is used to add behavior to an existing DOM element
			iv. It is used to design reusable components
			v. They do not have a view
	2. What is the usage of :host()?
		a. It is used to style the component HTML element itself, not its child elements
		b. If we put inside the brackets a class name, then the defined style will be applied to the host element that has the placed class
		c. For example if we have a loin component with a login-display-flex class and we want to give it a display style, then we will in our CSS file define host like this:
			i. :host(.login-display-flex) {
				display: flex;
				justify-content: center;
				Align-items: center;
				Flex-direction: column;
				Flex-wrap: wrap;
			}
			ii. <my-login class="login-display-flex"></my-login>
	3. Why do you need <base href="/">
		a. To define the base path for resolving relative URLs to assets such as images, scripts and style sheets. For example:
			i.  / -> means that the base path is the root of the application
			ii. /admin/ -> means that the browser will resolve a URL such as ../assets/images/sample.png into a server request for /admin/assets/images/sample.png
	4. AOT vs JIT? Why?
		a. AOT is ahead of time, compiles the application at build time on the server
		b. JIT is just in time, compiles the application in the browser at runtime
		c. JIT is mostly used for development build while AOT is mostly used for production build.
		d. JIT
			i. Loads the application slower because it needs to compile the application when running for the first time
			ii. It compiles the application before displaying it
			iii. The bundle size is bigger
		e. AOT
			i. Loads the application more quickly
			ii. It compiles the code when building the application, so it does not compile the application before displaying it
			iii. The bundle size is half the size of the bundle size compiled by JIT

	5. If you have the following form. Using Reactive forms:
		a. Nickname and password should be required fields
		b. Send button should be disabled if the form is invalid
		<form>
			<input type=”text” name=”nickname” formControlName="nickname">
			<input type=”password” name=”password” formControlName="password">
			<button type=”button [disabled]="loginFormGroup.invalid">Send</button>
		</form>

		loginFormGroup: FormGroup;
		this.loginFormGroup = new FormGroup({
			nickname = new FormControl('', Validators.required),
			password = new FormControl('', Validators.required)
		});
	6. What is NgModule and why do we need them in our code?
		a. How do we pass dana from parent to child component?
			i. Using @Input
		b. How do we pass dana from child to parent component?
			i. Using @Output
		c. How do we pass dana to sibling components?
			i. Storing dana inside a service
	7. Which is the proper way to access a DOM element inside a Component?
		a. With @ViewChild
		b. For example:
			i. <input #nicknameInput placeholder="Nickname">
			ii.   @ViewChild('nicknameInput') nicknameInput: ElementRef;
	8. What is the usage of @ViewChild?
		a. @ViewChild is used to access a child component, directive or DOM element
	9. What is the alternative to digest cycle (Angular 1) in Angular 8+?
	10. What is Shallow DOM? Why do we need it?
      a. Shadow DOM?

### Observables
	1. If your renderer does not support:
		setTimeout(() => {
			console.log(‘test’))
		}, 3000);
		a. How can you implement the same with Observables?
		b. Is there any situation in Angular 8+ that this could happen?
	2. When does an Observables catches an error?
        - Observable.catch

### 2. Contributors

* **Jasmina Bužimkić** - Team Lead / Front-end developer (buzimkic.jasmina@gmail.com)
