import React, {ReactElement} from "react";
import {Container} from "inversify";
import {Provider} from "inversify-react";

import {ScrollService} from "./core/services/scroll.service.ts";

export const AppProvider: React.FC<{ children: ReactElement }> = ({ children }) => (
  <Provider container={() => {
    const container = new Container();

    container.bind(ScrollService).toSelf().inSingletonScope();

    return container;
  }}>
    {children}
  </Provider>
);
