import React from 'react';
import styled from "styled-components";
import { Avatar } from "@material-ui/core";

function Header() {
    return <HeaderContainer>
        {/* Header Left */}
        <HeaderLeft>
            <HeaderAvatar
                // TODO: Add onclick
            />
        </HeaderLeft>

        {/* Header Search */}

        {/* Header Right */}
    </HeaderContainer>
}

export default Header

const HeaderContainer = styled.div``;

const HeaderLeft = styled.div``;

const HeaderAvatar = styled(Avatar)``;