import React, { FC } from 'react';
import Box from '@mui/material/Box';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link'; // Importe o Link do Next.js
import { navigations } from './navigation.data';

const Navigation: FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
      {navigations.map(({ path: destination, label }) => (
        <Box
          key={destination}
          component={destination === '/login' ? 'div' : ScrollLink}
          activeClass="current"
          to={destination}
          spy={true}
          smooth={true}
          duration={350}
          sx={{
            position: 'relative',
            color: 'text.disabled',
            cursor: 'pointer',
            fontWeight: 600,
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            px: { xs: 0, md: 3 },
            mb: { xs: 3, md: 0 },
            fontSize: { xs: '1.2rem', md: 'inherit' },
            ...(destination === '/' && {
              color: 'primary.main',
            }),
            '& > div': { display: 'none' },
            '&.current>div': { display: 'block' },
            '&:hover': {
              color: 'primary.main',
              '& > div': {
                display: 'block',
              },
            },
          }}
        >
          {destination === '/login' ? (
            <Link href={destination} passHref>
              <a
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 12,
                    transform: 'rotate(3deg)',
                    '& img': { width: 44, height: 'auto' },
                  }}
                >
                  {/* eslint-disable-next-line */}
                </Box>
                {label}
              </a>
            </Link>
          ) : (
            <>
              <Box
                sx={{
                  position: 'absolute',
                  top: 12,
                  transform: 'rotate(3deg)',
                  '& img': { width: 44, height: 'auto' },
                }}
              >
                {/* eslint-disable-next-line */}
              </Box>
              {label}
            </>
          )}
        </Box>
      ))}
    </Box>
  );
};

export default Navigation;
