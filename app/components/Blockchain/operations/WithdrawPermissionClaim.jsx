import React from "react";
import Translate from "react-translate-component";

export const WithdrawPermissionClaim = ({op, linkToAccount, fromComponent}) => {
    if (fromComponent === "proposed_operation") {
        return (
            <span>
                <Translate
                    component="span"
                    content="proposal.withdraw_permission_claim"
                />
                &nbsp;
                {linkToAccount(op[1].withdraw_from_account)}
                <Translate component="span" content="proposal.to" />
                &nbsp;
                {linkToAccount(op[1].withdraw_to_account)}
            </span>
        );
    } else {
        return (
            <span>
                <Translate
                    component="span"
                    content="transaction.withdraw_permission_claim"
                />
                &nbsp;
                {linkToAccount(op[1].withdraw_from_account)}
                <Translate component="span" content="transaction.to" />
                &nbsp;
                {linkToAccount(op[1].withdraw_to_account)}
            </span>
        );
    }
};
