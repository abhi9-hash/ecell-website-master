import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";


//section for this Page..

import SectionTypography from "./SectionTypography.js";
import SectionTypography2019 from "./SectionTypography2019.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3 align="center"></h3>
          </div>
          
          <GridContainer >
            <GridItem xs={12} sm={12} md={12} lg={20} align="center">
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 2, md: 2 },
                  contentGrid: { xs: 12, sm: 8, md: 10 }
                }}
                tabs={[
                  
                  {
                    tabButton: "CORE MEMBERS",
                    
                    tabContent: (
                      <SectionTypography />
                    )
                  },
                  {
                    tabButton: "EXECUTIVE MEMBERS",
                    tabContent: (
                      <SectionTypography2019/>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
