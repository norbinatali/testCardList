import {createCustomElement} from '@servicenow/ui-core';
	import snabbdom from '@servicenow/ui-renderer-snabbdom';
	import styles from './styles.scss';
	import '@servicenow/now-template-card';

	const view = (state, ) => {
	return (
			<div >
				<div style={{display: 'flex' }}>
					<div style={{padding:'10px'}}>
						<div style={{width:"500px"}}>
						<now-template-card-assist tagline={{"icon": "tree-view-long-outline", "label": "Incident"}} actions={[{
							"id": "share",
							"label": "Copy URL"
						}, {
							"id": "close",
							"label": "Mark Complete"
						}]} heading={{"label": "my PDF docs all locked from editing"}} content={[{
							"label": "Number",
							"value": {"type":"string", "value":"INC0000038"}
						},{
							"label": "State",
							"value": {"type": "string", "value": "Closed"}
						}, {"label": "Assigment Group", "value": {"type": "string", "value": "Service Desk"}}, {
							"label": "Assigned To",
							"value": {"type": "string", "value": "Luke Wilson"}

						}]} contentItemMinWidth="300" footerContent={{"label": "Updated", "value": "2020-05-8 17:36:43"}} configAria={{}}/></div>
					</div>
						<div style={{padding:'10px'}}>
							<div style={{width:"500px"}}>
						<now-template-card-assist tagline={{"icon": "tree-view-long-outline", "label": "Incident"}} actions={[{
						"id": "share",
						"label": "Copy URL"
					}, {
						"id": "close",
						"label": "Mark Complete"
					}]} heading={{"label": "Hangs when trying to print VISIO document"}} content={[{
						"label":"Number",
						"value":{"type":"string", "value": "INC0000006"}
					},{
						"label": "State",
						"value": {"type": "string", "value": "Closed"}
					}, {"label": "Assignment Group", "value": {"type": "string", "value": "Software"}}, {
						"label": "Assigned To",
						"value": {"type": "string", "value": "Howard Johnson"}

					}]} contentItemMinWidth="300" footerContent={{"label": "Updated", "value": "2020-05-01 16:08:05"}} configAria={{}}/></div></div>
				</div>
					<div style={{display: 'flex'}}>
					<div style={{padding:'10px'}}>
						<div style={{width:"500px"}}>
						<now-template-card-assist tagline={{"icon": "tree-view-long-outline", "label": "Incident"}} actions={[{
						"id": "share",
						"label": "Copy URL"
					}, {
						"id": "close",
						"label": "Mark Complete"
					}]} heading={{"label": "Printer in my office is out of toner"}} content={[{
						"label": "Number",
						"value": {"type": "string", "value": "INC0000008"}
					}, {"label": "State", "value": {"type": "string", "value": "Closed"}}, {
						"label": "Assignment Group",
						"value": {"type": "string", "value": "Hardware"}
					}, {
						"label": "Assigned To",
						"value": {"type": "string", "value": "ITIL User"}
					}]} contentItemMinWidth="300" footerContent={{"label": "Updated", "value": "2020-05-09 16:08:39"}} configAria={{}}/></div>
					</div><div style={{padding:'10px'}}>
						<div style={{width:"500px"}}>
						<now-template-card-assist tagline={{"icon": "tree-view-long-outline", "label": "Incident"}} actions={[{
						"id": "share",
						"label": "Copy URL"
					}, {
						"id": "close",
						"label": "Mark Complete"
					}]} heading={{"label": "Can't read email"}} content={[{
						"label": "Number",
						"value": {"type": "string", "value": "INC0000001"}
					}, {"label": "State", "value": {"type": "string", "value": "Closed"}}, {
						"label": "Assignment Group",
						"value": {"type": "string", "value": "Service Desk"}
					}, {
						"label": "Assigned To",
						"value": {"type": "string", "value": "Charlie Whithers.."}
					}]} contentItemMinWidth="300" footerContent={{"label": "Updated", "value": "2019-01-15 08:41:09"}} configAria={{}}/></div>
					</div></div></div>
		);
	};

	createCustomElement('x-550094-card-list', {
		renderer: {type: snabbdom},
		view,
		styles
	});
