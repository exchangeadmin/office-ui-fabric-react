import * as React from 'react';
import { ContextualMenuItemType } from 'office-ui-fabric-react/lib/ContextualMenu';
import { DefaultButton } from 'office-ui-fabric-react/lib/Button';
import './ContextualMenuExample.scss';

export class ContextualMenuSectionExample extends React.Component<any, any> {
  public render(): JSX.Element {
    return (
      <div>
        <DefaultButton
          id="ContextualMenuSectionExample"
          text="Click for ContextualMenu"
          menuProps={{
            items: [
              {
                key: 'section',
                itemType: ContextualMenuItemType.Section,
                sectionProps: {
                  topDivider: true,
                  bottomDivider: true,
                  title: 'Actions',
                  items: [
                    {
                      key: 'newItem',
                      text: 'New'
                    },
                    {
                      key: 'deleteItem',
                      text: 'Delete'
                    }
                  ]
                }
              },
              {
                key: 'section',
                itemType: ContextualMenuItemType.Section,
                sectionProps: {
                  title: 'Social',
                  items: [
                    {
                      key: 'share',
                      text: 'Share'
                    },
                    {
                      key: 'print',
                      text: 'Print'
                    },
                    {
                      key: 'music',
                      text: 'Music'
                    }
                  ]
                }
              },
              {
                key: 'section',
                itemType: ContextualMenuItemType.Section,
                sectionProps: {
                  title: 'Navigation',
                  items: [
                    {
                      key: 'Bing',
                      text: 'Go to Bing',
                      href: 'http://www.bing.com'
                    }
                  ]
                }
              }
            ]
          }}
        />
      </div>
    );
  }
}
