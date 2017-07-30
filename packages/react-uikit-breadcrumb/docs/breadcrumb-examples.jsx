import React from 'react';
import Breadcrumb from '../lib/Breadcrumb';
import BreadcrumbItem from '../lib/breadcrumb-item';
import Table from 'react-uikit-table';

const basicTable = (
  <Table head="*" body={[
    { Type: 'link', Description: 'Creates breadcrumb item as a Link' },
    { Type: 'acive', Description: 'Shows the breadcrumb item as active' },
    { Type: 'disabled', Description: 'Disables the breadcrumb Item' }
  ]} />
);

const basicExample = (
  <Breadcrumb kitid='bread'>
    <BreadcrumbItem kitid='1' body='Home'/>
    <BreadcrumbItem kitid='4' type='link' body='link'/>
    <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
    <BreadcrumbItem kitid='2' type='active' body='Post'/>
  </Breadcrumb>
);
const basicSnippet = `<Breadcrumb kitid='bread'>
  <BreadcrumbItem kitid='1' body='Home'/>
  <BreadcrumbItem kitid='4' type='link' body='link'/>
  <BreadcrumbItem kitid='3' type='disabled' body='Category'/>
  <BreadcrumbItem kitid='2' type='active' body='Post'/>
</Breadcrumb>`;

export default {
  basicTable,
  basicExample,
  basicSnippet,
};
