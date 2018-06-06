# GRID

Container > Row > Column

## Container

`<Container>` represents `<div className="container">...</div>`.

| Prop | Default | Type | Description |
| ---- | ------- | ---- | ----------- |
| fluid | null | bool | add `-fluid`, e.g. `<div className="container-fluid">...</div>`|

## Row

`<Row>` represents `<div className="row">...</div>`.

## Columns

`<Column>` represents `<div className="col">...</div>`.

| Prop | Default | Type | Description |
| ---- | ------- | ---- | ----------- |
| mobile | null | int | add `col-${mobile} col-sm-${mobile}`, e.g. `<div className="col-12 col-sm-12">...</div>` |
| tablet | null | int | add `col-md-${tablet}`, e.g. `<div className="... col-md-8">...</div>` |
| desktop | null | int | add `col-lg-${desktop}`, e.g. `<div className="... col-lg-4">...</div>` |
